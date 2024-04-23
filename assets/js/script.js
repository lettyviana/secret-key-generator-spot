function generateSecretKey() {
  let array = new Uint32Array(8);
  window.crypto.getRandomValues(array);
  let secretKey = "";
  for (let i = 0; i < array.length; i++) {
    secretKey += array[i].toString(16);
  }
  return secretKey;
}

function setSecretKey() {
  const resultInput = document.getElementById("result");
  const secretKey = generateSecretKey();
  resultInput.textContent = secretKey;
}

function showCopyMessage() {
  let copiedMessage = document.getElementById("copied-message__container");

  copiedMessage.classList.add("show");

  setTimeout(function () {
    copiedMessage.classList.remove("show");
  }, 2500);
}

async function copySecretKey() {
  let result = document.getElementById("result").textContent;

  if (result.trim() === "") {
    return;
  }

  try {
    await navigator.clipboard.writeText(result);
    showCopyMessage();
  } catch (error) {
    console.error(`Erro ao copiar texto: ${error}`);
  }
}
