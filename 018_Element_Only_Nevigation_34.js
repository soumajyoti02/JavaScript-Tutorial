
// HTML

<body>
  <!--   this is me -->
  <nav>
    <ul>
      <li>Home</li>
      <li>About Me</li>
      <li>Hire me</li>
    </ul>
  </nav>

  <div class="container">
    <p>Hey I am a good boy</p>
  </div>
</body>

// JAVASCRIPT

const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)
