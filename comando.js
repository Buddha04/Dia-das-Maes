document.addEventListener('DOMContentLoaded', () => {
    const botaoLer = document.getElementById('botao-ler');
    const telaInicial = document.getElementById('tela-inicial');
    const faseCarta = document.getElementById('fase-carta');

    // Ao clicar no coração, a mágica acontece
    botaoLer.addEventListener('click', () => {
        // Sai a tela inicial, entra a carta decorada
        telaInicial.classList.add('hidden');
        faseCarta.classList.remove('hidden');
    });
});