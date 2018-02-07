function printString(string){
    setTimeout(
      () => {
        console.log(string)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }