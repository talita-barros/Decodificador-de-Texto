function criptografar() {
    let textoOriginal = document.getElementById('textoOriginal').value;

    if (/[A-ZÀ-ÖØ-Ý]/.test(textoOriginal) || /[áéíóúãõâêîôûàèìòùäëïöü]/.test(textoOriginal)) {
        alert("Por favor, use apenas palavras em letras minúsculas e sem acentos para criptografar.");
        return;
    }

    textoOriginal = textoOriginal.toLowerCase(); // Converter para letras minúsculas
    textoOriginal = textoOriginal.normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // Remover acentos

    let textoCriptografado = textoOriginal.replace(/e/g, 'enter')
                                         .replace(/i/g, 'imes')
                                         .replace(/a/g, 'ai')
                                         .replace(/o/g, 'ober')
                                         .replace(/u/g, 'ufat');
    exibirMensagem(textoCriptografado);
    ocultarImagem();
}

function descriptografar() {
    let textoCriptografado = document.getElementById('textoOriginal').value;

    if (/[A-ZÀ-ÖØ-Ý]/.test(textoCriptografado) || /[áéíóúãõâêîôûàèìòùäëïöü]/.test(textoCriptografado)) {
        alert("Por favor, use apenas palavras em letras minúsculas e sem acentos para descriptografar.");
        return;
    }

    textoCriptografado = textoCriptografado.toLowerCase(); // Converter para letras minúsculas

    let textoOriginal = textoCriptografado.replace(/enter/g, 'e')
                                         .replace(/imes/g, 'i')
                                         .replace(/ai/g, 'a')
                                         .replace(/ober/g, 'o')
                                         .replace(/ufat/g, 'u');
    exibirMensagem(textoOriginal);
    ocultarImagem();
}

function exibirMensagem(mensagem) {
    document.getElementById('mensagemResultado').innerText = mensagem;
    document.getElementById('imagem-do-gatinho').style.display = 'none';
    document.getElementById('mensagemParabens').style.display = 'block';
}

function copiarResultado() {
    let resultado = document.getElementById('mensagemResultado');
    let range = document.createRange();
    range.selectNode(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    ocultarImagem();

    // Adiciona uma mensagem na section aside-content
    let asideContentMessage = document.getElementById('aside-content-message');
    asideContentMessage.innerText = 'Texto copiado com sucesso!';

    // Limpa a mensagem após alguns segundos
    setTimeout(() => {
        asideContentMessage.innerText = '';
    }, 3000); // A mensagem será removida após 3 segundos (3000 milissegundos)
}

function ocultarImagem() {
    document.getElementById('imagem-do-gatinho').style.display = 'none';
}