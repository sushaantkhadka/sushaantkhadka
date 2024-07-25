import React, { useEffect } from "react";

export default function MatrixEffect() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Single color
    const singleColor = "#0aff0a";

    // Gradient color
    let gradientColor = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradientColor.addColorStop(0, "red");
    gradientColor.addColorStop(0.2, "yellow");
    gradientColor.addColorStop(0.4, "green");
    gradientColor.addColorStop(0.6, "cyan");
    gradientColor.addColorStop(0.8, "blue");
    gradientColor.addColorStop(1, "magenta");

    // Default color
    let defaultColor = singleColor;

    // Creating effect object
    const effect = new Effect(canvas.width, canvas.height);

    let lastTime = 0;
    const fps = 50;
    const nextframe = 1000 / fps;
    let timer = 0;

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextframe) {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = defaultColor;
        effect.symbols.forEach((symbol) => {
          symbol.draw(ctx);
          symbol.update();
        });
        timer = 0;
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animate);
    }
    animate(0);

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
      gradientColor = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradientColor.addColorStop(0, "red");
      gradientColor.addColorStop(0.2, "yellow");
      gradientColor.addColorStop(0.4, "green");
      gradientColor.addColorStop(0.6, "cyan");
      gradientColor.addColorStop(0.8, "blue");
      gradientColor.addColorStop(1, "magenta");
    }

    window.addEventListener("resize", handleResize);

    function handleColorToggle() {
      defaultColor = defaultColor === singleColor ? gradientColor : singleColor;
    }

    window.addEventListener("dblclick", handleColorToggle);

    let lastTouchEnd = 0;
    function handleTouchEnd() {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        handleColorToggle();
      }
      lastTouchEnd = now;
    }

    window.addEventListener("touchend", handleTouchEnd);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("dblclick", handleColorToggle);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return <canvas id="canvas" className="absolute mt-[-15px]"></canvas>;
}

// Effects
class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 17;
    this.columns = canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }

  initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
}

// Symbols
class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.chracters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = "";
  }

  draw(context) {
    this.text = this.chracters.charAt(
      Math.floor(Math.random() * this.chracters.length)
    );
    context.textAlign = "center";
    context.font = this.fontSize + "px monospace";
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
  }

  update() {
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}
