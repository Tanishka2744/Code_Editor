const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");

function runCode() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = jsCode.value;

    const iframeDoc = output.contentDocument || output.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(html + css);
    iframeDoc.close();

    try {
        output.contentWindow.eval(js);
    } catch (error) {
        console.error(error);
    }
}

htmlCode.addEventListener("keyup", runCode);
cssCode.addEventListener("keyup", runCode);
jsCode.addEventListener("keyup", runCode);
