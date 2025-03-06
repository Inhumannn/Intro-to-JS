// Const darkmode
const themeSwitch = document.querySelector('#darkmode');
const theme = document.querySelector('body');
const themeLogo = document.querySelector( '#logo')
const icone = document.querySelector('#icone')
// Chargement de la page on vérifie si les thèmes dark y est ou pas (localStorage)
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark'){
   // Ajoute le thème dark
   theme.classList.add('darkmondeon');
   themeLogo.src = theme.classList.contains('darkmondeon') ? "img/logo-blanc.png" : "img/logo-noir.png";
};
// Ecoute du click
themeSwitch.addEventListener('click', (e) => {
   e.preventDefault();
   // Ajoute la classe "darkmondeon"
   theme.classList.toggle('darkmondeon');
   icone.classList.toggle('fa-moon')
   // Sauvegarde l'état du thème (localStorage) // Changement du thème, logo
   localStorage.setItem('theme', theme.classList.contains('darkmondeon') ? 'dark' : 'light');
   themeLogo.src = theme.classList.contains('darkmondeon') ? "img/logo-blanc.png" : "img/logo-noir.png";
});
// Modal
const dial = `
<dialog id="userDialog">
   <form action="#">
      <div>
         <label for="name">Nom d'utilisateur</label> <br />
         <input type="text" name="name" id="name" placeholder="JackAdams">
      </div>
      <div>
         <label for="pass">Mot de passe </label> <br />
         <input type="password" name="pass" id="pass" placeholder="3rm7T#u7WF@2e)V">
      </div> 
      <button type="button" class="btnPopUpClose" id="submit">Cancel</button>
      <button type="submit" class="btnSend" id="submit">Send</button>
   </form>
</dialog>`;
// Const inscription
const btnPopUp = document.querySelector('#newsletter');
const dialogContainer = document.querySelector('#admin');
// Ecoute du click
btnPopUp.addEventListener('click', (e) => {
   e.preventDefault();
   // Vérifie si le dialog existe déjà
   if (!document.querySelector('#userDialog')) {
      dialogContainer.insertAdjacentHTML('afterend', dial);
   }
   // const mondale
   const userDialog = document.querySelector('#userDialog');
   const btnPopUpClose = document.querySelector('.btnPopUpClose');
   const btn_send = document.querySelector('.btnSend');
   // Ouvre le dialogue
   userDialog.showModal();
   // Ecoute du click // Ferme le dialog
   btnPopUpClose.addEventListener('click', (e) => {
      e.preventDefault();
      userDialog.close();
   });
   // Ecoute du click // Ferme le modal en cliquant en dehors
   userDialog.addEventListener('click', (e) => {
      if (e.target === userDialog) {
         e.preventDefault();
         userDialog.close();
      }
   });
   // Message d'inscription
   btn_send.addEventListener('click', (e) => {
      e.preventDefault();
      const user_name = document.querySelector('#name').value;
      userDialog.innerHTML = `Bonjour ${user_name} ! Nous sommes ravis de t'accueillir dans notre communauté. Explore nos produits/services et découvre comment nous pouvons t'aider à atteindre tes objectifs.`;
   });
   // Réinitialise les champs du formulaire
   document.querySelector('#name').value = "";
   document.querySelector('#pass').value = "";
});
// Const "contactez-nous"
const btn_form = document.querySelector('#submit');
// Ecoute du click
btn_form.addEventListener('click', (e) => {
   e.preventDefault();
   // Const champs du formulaire
   const form_name = document.querySelector('#form_name').value;
   const form_phone = document.querySelector('#form_phone').value;
   const form_company = document.querySelector('#form_company').value;
   const form_mail = document.querySelector('#form_mail').value;
   // Vérifie si tous les champs sont remplis
   if (!form_name || !form_phone || !form_company || !form_mail) {
      alert("Veuillez remplir tous les champs !");
      return;
   }
   // Récupère les valeurs du select
   const options = [];
   const form_select = document.querySelector('#form_option');
   // Ajout des options sélectionnées
   for (let i = 0; i < form_select.options.length; i++) {
      if (form_select.options[i].selected) {
         options.push(form_select.options[i].value);
      }
   }
   const form_precision = document.querySelector('#form_precision').value;
   // Modal
   const form = `
      <dialog id="userFrom">
         <p>Votre formulaire a bien été pris en compte. Voici les informations :</p>
         <p>Nom et prénom : ${form_name}</p>
         <p>Numéro de téléphone : ${form_phone}</p> 
         <p>Nom de l'entreprise : ${form_company}</p>
         <p>Adresse mail : ${form_mail}</p>
         <p>Renseignements : ${options.join(', ')}</p>
         <p>Object : ${form_precision}</p>
      </dialog>`;
   if (!document.querySelector('#userFrom')) {
      dialogContainer.insertAdjacentHTML('afterend', form);
   }
   const userFrom = document.querySelector('#userFrom');
   userFrom.showModal();
   // Ecoute du click // Ferme le modal en cliquant en dehors
   userFrom.addEventListener('click', (e) => {
      if (e.target === userFrom) {
         e.preventDefault();
         userFrom.close();
      }
   });
   // Réinitialisation des champs du formulaire
   document.querySelector('#form_name').value = "";
   document.querySelector('#form_phone').value = "";
   document.querySelector('#form_company').value = "";
   document.querySelector('#form_mail').value = "";
   document.querySelector('#form_precision').value = "";
});
// Const inscription
const btn_registration = document.querySelector('#inscription');
btn_registration.addEventListener('click', (e) => {
   e.preventDefault();
   // Modal
   const formPopUp = `
      <div id="userFormPopUp">
         <h1 class="subtitle">Contactez-nous</h1>
         <form action="#" method="post">
            <input id="form_name_popup" type="text" placeholder="Votre nom et prénom">
            <input id="form_phone_popup" type="tel" placeholder="Votre numéro de téléphone">
            <input id="form_company_popup" type="text" placeholder="Le nom de votre entreprise">
            <input id="form_mail_popup" type="email" placeholder="Votre adresse mail">
            <select id="form_option_popup">
               <option value="Je veux des renseignements concernant l'accompagnement perso">Je veux des renseignements concernant l'accompagnement perso</option>
               <option value="Je veux des renseignements concernant l'accompagnement small group">Je veux des renseignements concernant l'accompagnement small group</option>
               <option value="Je veux des renseignements concernant la formation digitale">Je veux des renseignements concernant la formation digitale</option>
               <option value="Je veux des renseignements concernant le coaching digital">Je veux des renseignements concernant le coaching digital</option>
               <option value="J'ai une autre demande">J'ai une autre demande</option>
            </select>
            <textarea cols="30" rows="10" placeholder="Précisez votre demande afin de faciliter l'échange lorsqu'un de nos conseillers vous appellera" id="form_precision_popup"></textarea>
            <label for="RGPD"><input id="RGPD" type="checkbox" required="required"> En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail à l'équipe de SkillFacile dans le but d'être recontacté concernant la demande effectuée. Je comprends que j'ai un droit de modification, d'accès et de suppression de mes informations personnelles.</label>
            <input id="submit_popup" type="submit" value="Envoyer la demande">                    
         </form>
      </div>`;
   // Vérifie si le modal existe déjà
   const userFormPopUp = document.querySelector('#userFormPopUp');
   if (!document.querySelector('#userFormPopUp')) {
      userFormPopUp.insertAdjacentHTML('afterend', formPopUp);
   }

   userFormPopUp.showModal();

   userFormPopUp.addEventListener('click', (e) => {
      if (e.target === userFormPopUp) {
         e.preventDefault();
         userFormPopUp.close();
      }
   });
    // Soumission du formulaire
   const form = userFormPopUp.querySelector('form');
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      const form_name = document.querySelector('#form_name_popup').value;
      const form_phone = document.querySelector('#form_phone_popup').value;
      const form_company = document.querySelector('#form_company_popup').value;
      const form_mail = document.querySelector('#form_mail_popup').value;
      const form_precision = document.querySelector('#form_precision_popup').value;
      const form_option = document.querySelector('#form_option_popup').value;
      // Vérification des champs avant de soumettre
      if (!form_name || !form_phone || !form_company || !form_mail || !form_precision || !form_option) {
         alert("Veuillez remplir tous les champs !");
         return;
      };
      // Message d'alert
      userFormPopUp.close();
      alert("Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.");
   });
});
