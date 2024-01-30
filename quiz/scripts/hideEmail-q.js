/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];

window.onload = function hideEmail() {
    const list = document.getElementById('emails');
    list.innerHTML = '';
    for (const email of emails) {
        const atIndex = email.indexOf('@');
        const isValidEmail = atIndex > 0 && email.endsWith('@northeastern.edu');
        
        if (isValidEmail) {
            const localPart = email.substring(0, atIndex);
            const domain = email.substring(atIndex);
            const anonymizedEmail = '*'.repeat(localPart.length) + domain;
            const listItem = document.createElement('li');
            listItem.textContent = anonymizedEmail;
            list.appendChild(listItem);
        }
    }
}
