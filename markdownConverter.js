function convertMarkDown () {
    const mdInput = document.getElementById(markdown-input);
    let html = mdInput;
// headings
    html = html.replace(/^\s*### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^\s*## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^\s*# (.*$)/gm, '<h1>$1</h1>');

// blockquotes

    html = html.replace(/^\s*> (.*$)/gm, '<blockquote>$1</blockquote>')

// images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')

//links

    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

// fett
    html = html.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>')
// kursiv
    html = html.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>')
// Zeilenumbrüche
    html = html.replace(/\n/g, '<br>')
    

return html
}

const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

markdownInput.addEventListener('input', () => {
  const convertedHtml = convertMarkdown();
  
  htmlOutput.textContent = convertedHtml;
  
  
  preview.innerHTML = convertedHtml;
});