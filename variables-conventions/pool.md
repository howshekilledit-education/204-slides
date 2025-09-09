---
title: "P5.js Variables and Mouse Interaction"
subtitle: "mouseX, mouseY, mousePressed & Custom Variables"
author: "Interactive Programming with P5.js"
format: 
  revealjs:
    theme: dark
    transition: slide
    highlight-style: github
---

## What We'll Learn Today

- Built-in mouse variables: `mouseX`, `mouseY`, `mousePressed`
- Creating and using custom variables
- The three steps of working with variables
- Making interactive animations
- Global vs local variables

---

## Built-in Mouse Variables

P5.js provides several built-in variables for mouse interaction:

- **`mouseX`** - Current horizontal position of mouse
- **`mouseY`** - Current vertical position of mouse  
- **`mousePressed`** - Boolean: true when mouse button is pressed

These update automatically every frame!

---

## Basic Mouse Tracking

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Circle follows mouse
  fill(255, 100, 100);
  circle(mouseX, mouseY, 50);
  
  // Display coordinates
  fill(0);
  text(`x: ${mouseX}, y: ${mouseY}`, 10, 20);
}
```

---

## The Three Steps of Variables

### 1. **Declare** - Tell the program the variable exists
### 2. **Initialize** - Give it an initial value  
### 3. **Use** - Put it to work in your code

---

## Step 1: Declare

```javascript
// Declare variables (usually at the top)
let x;
let y;
let diameter;
let speed;
```

This creates the variables but they have no value yet (`undefined`).

---

## Step 2: Initialize

```javascript
let x;
let y;
let diameter;

function setup() {
  createCanvas(400, 400);
  
  // Initialize variables
  x = 200;
  y = 200;
  diameter = 50;
}
```

Now our variables have starting values!

---

## Step 3: Use

```javascript
function draw() {
  background(220);
  
  // Use the variables
  fill(255, 100, 150);
  circle(x, y, diameter);
}
```

The variables control the circle's position and size.

---

## Combining Declaration & Initialization

You can do both steps at once:

```javascript
// Combined approach
let x = 200;
let y = 200;
let diameter = 50;

function setup() {
  createCanvas(400, 400);
}
```

This is more concise and often preferred.

---

## Global Variables

Variables declared outside functions are **global**:

```javascript
let x = 200;  // Global - accessible everywhere
let y = 200;  // Global - accessible everywhere

function setup() {
  createCanvas(400, 400);
}

function draw() {
  circle(x, y, 50);  // Can use x and y here
}
```

---

## Making Things Move

To animate, we need to **change** variable values over time:

```javascript
let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(x, 200, 50);
  x = x + 1;  // Move right each frame
}
```

---

## Interactive Movement

Combine mouse variables with custom variables:

```javascript
let x = 200;
let y = 200;

function draw() {
  background(220);
  
  // Move towards mouse position
  x = x + (mouseX - x) * 0.05;
  y = y + (mouseY - y) * 0.05;
  
  circle(x, y, 50);
}
```

---

## Growing Circle Example

```javascript
let diameter = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Grow when mouse pressed
  if (mousePressed) {
    diameter = diameter + 2;
  }
  
  circle(mouseX, mouseY, diameter);
}
```

---

## Color Change on Click

```javascript
let r = 255;
let g = 100;
let b = 100;

function draw() {
  background(220);
  
  // Change color when pressed
  if (mousePressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  
  fill(r, g, b);
  circle(mouseX, mouseY, 80);
}
```

---

## Multiple Moving Objects

```javascript
let x1 = 100, y1 = 200;
let x2 = 300, y2 = 200;
let speed1 = 2, speed2 = -1.5;

function draw() {
  background(220);
  
  // First circle
  circle(x1, y1, 50);
  x1 += speed1;
  
  // Second circle  
  circle(x2, y2, 40);
  x2 += speed2;
  
  // Bounce off edges
  if (x1 > width || x1 < 0) speed1 *= -1;
  if (x2 > width || x2 < 0) speed2 *= -1;
}
```

---

## Mouse Events

Beyond `mousePressed`, p5.js offers mouse event functions:

```javascript
function mousePressed() {
  // Called once when mouse is pressed
  diameter = random(20, 100);
}

function mouseReleased() {
  // Called once when mouse is released
  diameter = 50;
}

function mouseMoved() {
  // Called when mouse moves
  backgroundColor = random(255);
}
```

---

## Practice Exercise

Create a sketch that:

1. Has a circle that follows the mouse
2. Changes size when mouse is pressed
3. Changes color when mouse is released
4. Leaves a trail as it moves

Try combining `mouseX`, `mouseY`, `mousePressed` with your own variables!

---

## Key Takeaways

- **mouseX, mouseY** automatically track mouse position
- **mousePressed** detects when mouse button is held down
- Custom variables need: **declare**, **initialize**, **use**
- **Global variables** are accessible throughout your program
- **Animation** = changing variable values over time
- Combine built-in and custom variables for rich interactions

---

## Next Steps

- Experiment with different variable types
- Try incrementation operators (`++`, `+=`)
- Explore other built-in variables (`width`, `height`, `frameCount`)
- Create more complex interactive animations

**Happy coding!** 🎨✨
