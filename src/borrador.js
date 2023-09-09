useEffect(() => {
    window.addEventListener('click' , e => {
      let objetoSelect = e.target.parentElement;
      const btnSelect = e.target.classList.contains('btn-menu-lista');
      const btnVer = e.target.classList.contains('btn-comprar');
      if(btnVer) {
        verDescripcion()
      }
      if(btnSelect){
        let objetoId = document.querySelector('li');
        let dataSet = objetoId.dataset;
        let marcaTipo = dataSet.id;
        let miSeleccion = objetoSelect.querySelector('.btn-menu-lista').textContent;
        console.log(objetoId)
        console.log(objetoSelect)
        console.log(marcaTipo)
        console.log(miSeleccion)
        setMt(marcaTipo)
        setMis(miSeleccion)
        setPs(true)
        setP(false)
        setI(false)
        setInf(false)
        setC(false)
        
      }
      
    },[mis])

  })


  