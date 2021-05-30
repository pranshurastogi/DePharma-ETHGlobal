window.addEventListener('unlockProtocol.status', function(event) {
    console.log('Hello');
    // We hide all .unlock-content elements
    document.querySelector('.unlock-content').style.display = "none"
    // We show only the relevant element
    document.querySelectorAll(`.unlock-content.${event.detail.state}`).forEach((element) => {
        element.style.display = "block"
    })
  })
  
  window.addEventListener('unlockProtocol.authenticated', function(event) {
    console.log('Hello1');
      // event.detail.addresss includes the address of the current user, when known
  })
  
  window.addEventListener('unlockProtocol.transactionSent', function(event) {
    console.log('Hello2');
      // event.detail.hash includes the hash of the transaction sent
  })
  