let message = '<ul>';

for (let i = -1722; i <= 2756 ; i++) {
    if (i % 9 === 0) {
        message += '<li>';
        message += i;
        message += '</li>';
    }
}

message += '</ul>';
console.log('Aye !');
document.write(message);