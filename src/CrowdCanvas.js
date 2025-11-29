import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CrowdCanvas({ src, rows = 15, cols = 7, className = "" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const config = { src, rows, cols }

    const randomRange = (min, max) => min + Math.random() * (max - min)
    const randomIndex = array => randomRange(0, array.length) | 0
    const removeFromArray = (array, index) => array.splice(index, 1)[0]
    const removeItemFromArray = (array, item) => removeFromArray(array, array.indexOf(item))
    const removeRandomFromArray = array => removeFromArray(array, randomIndex(array))
    const getRandomFromArray = array => array[randomIndex(array) | 0]

    const resetPeep = ({ stage, peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1
      const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random())
      const startY = stage.height - peep.height + offsetY
      let startX
      let endX

      if (direction === 1) {
        startX = -peep.width
        endX = stage.width
        peep.scaleX = 1
      } else {
        startX = stage.width + peep.width
        endX = 0
        peep.scaleX = -1
      }

      peep.x = startX
      peep.y = startY
      peep.anchorY = startY

      return { startX, startY, endX }
    }

    const normalWalk = ({ peep, props }) => {
      const { startX, startY, endX } = props
      const xDuration = 10
      const yDuration = 0.25
      const tl = gsap.timeline()

      tl.timeScale(randomRange(0.5, 1.5))
      tl.to(
        peep,
        {
          duration: xDuration,
          x: endX,
          ease: "none"
        },
        0
      )

      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: xDuration / yDuration,
          yoyo: true,
          y: startY - 10
        },
        0
      )

      return tl
    }

    const walks = [normalWalk]

    const createPeep = ({ image, rect }) => {
      const peep = {
        image,
        rect: [],
        width: 0,
        height: 0,
        drawArgs: [],
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        setRect: newRect => {
          peep.rect = newRect
          peep.width = newRect[2]
          peep.height = newRect[3]
          peep.drawArgs = [peep.image, ...newRect, 0, 0, peep.width, peep.height]
        },
        render: renderCtx => {
          renderCtx.save()
          renderCtx.translate(peep.x, peep.y)
          renderCtx.scale(peep.scaleX, 1)
          renderCtx.drawImage(
            peep.image,
            peep.rect[0],
            peep.rect[1],
            peep.rect[2],
            peep.rect[3],
            0,
            0,
            peep.width,
            peep.height
          )
          renderCtx.restore()
        }
      }

      peep.setRect(rect)
      return peep
    }

    const img = document.createElement("img")
    const stage = { width: 0, height: 0 }
    const allPeeps = []
    const availablePeeps = []
    const crowd = []

    const createPeeps = () => {
      const { rows: totalRows, cols: totalCols } = config
      const { naturalWidth: width, naturalHeight: height } = img
      const total = totalRows * totalCols
      const rectWidth = width / totalRows
      const rectHeight = height / totalCols

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          createPeep({
            image: img,
            rect: [
              (i % totalRows) * rectWidth,
              ((i / totalRows) | 0) * rectHeight,
              rectWidth,
              rectHeight
            ]
          })
        )
      }
    }

    const initCrowd = () => {
      while (availablePeeps.length) {
        addPeepToCrowd().walk.progress(Math.random())
      }
    }

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps)
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({ peep, stage })
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep)
        addPeepToCrowd()
      })

      peep.walk = walk
      crowd.push(peep)
      crowd.sort((a, b) => a.anchorY - b.anchorY)
      return peep
    }

    const removePeepFromCrowd = peep => {
      removeItemFromArray(crowd, peep)
      availablePeeps.push(peep)
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      crowd.forEach(peep => {
        peep.render(ctx)
      })
      ctx.restore()
    }

    const resize = () => {
      stage.width = canvas.clientWidth
      stage.height = canvas.clientHeight
      const ratio = window.devicePixelRatio || 1
      canvas.width = stage.width * ratio
      canvas.height = stage.height * ratio

      crowd.forEach(peep => peep.walk && peep.walk.kill())
      crowd.length = 0
      availablePeeps.length = 0
      availablePeeps.push(...allPeeps)
      initCrowd()
    }

    const init = () => {
      createPeeps()
      resize()
      gsap.ticker.add(render)
    }

    img.onload = init
    img.src = config.src

    const handleResize = () => resize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      gsap.ticker.remove(render)
      crowd.forEach(peep => peep.walk && peep.walk.kill())
    }
  }, [src, rows, cols])

  return <canvas ref={canvasRef} className={`crowd-canvas ${className}`} />
}





