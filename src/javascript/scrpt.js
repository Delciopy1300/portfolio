
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ativo');
           botoes.forEach(botao => {
                    botao.style.width = "150px";
                }); 
        } else {
          entry.target.classList.remove('ativo');
         botoes.forEach(botao => {
                    const tamanho = botao.dataset.maxwidth;
                    botao.style.width = tamanho;
                });
        }
      });
    }, {
      threshold: 0.5
    });

    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => observer.observe(secao));
    const botoes = document.querySelectorAll('.botao-expandivel');
    const sec = document.getElementById('linguas');
    sec.forEach(linguas => observer.observe(linguas));
