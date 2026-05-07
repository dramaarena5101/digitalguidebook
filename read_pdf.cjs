const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Guide Book DA 5101 (Isian & Penutup) fixx.pdf');

const parse = typeof pdf === 'function' ? pdf : (pdf.default || pdf.pdf);
if (!parse) { console.log(Object.keys(pdf)); }

parse(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_text.txt', data.text);
    console.log('PDF text extracted to pdf_text.txt');
}).catch(err => {
    console.error("Error reading PDF: ", err);
});
