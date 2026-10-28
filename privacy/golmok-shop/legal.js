// Progressive enhancement only: both complete translations remain in the HTML.
function selectLanguage(){
 const hash=location.hash.slice(1),lang=/^en(?:-|$)/.test(hash)?'en':/^ko(?:-|$)/.test(hash)?'ko':navigator.language.toLowerCase().startsWith('ko')?'ko':'en';
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-language]').forEach(el=>el.hidden=el.dataset.language!==lang);
 document.querySelectorAll('[data-language-choice]').forEach(el=>el.setAttribute('aria-current',String(el.dataset.languageChoice===lang)));
 document.querySelectorAll('[data-document]').forEach(el=>{el.href=el.dataset.document+'#'+lang;});
}
selectLanguage();addEventListener('hashchange',selectLanguage);
