var menuHidden = document.querySelector( '.menu-hidden' );
var mainPage   = document.querySelector( '.main-page' );
var menuOpen   = document.querySelector( '.menu-block' );
var menuClose  = document.querySelector( '.close' );

menuOpen.onclick = function () {
    mainPage.style.display   = 'none';
    menuHidden.style.display = 'block';
};

menuClose.onclick = function () {
    mainPage.style.display   = 'block';
    menuHidden.style.display = 'none';
};

var advantagesToggle = document.querySelectorAll( '.flex-third > p' );

var advantagesToggleArray = Array.prototype.slice.call( advantagesToggle );

const clName = 'pOnTarget';

const addOrRemoveTargetClass = function ( n ) {
    advantagesToggleArray.forEach( function ( node ) {
        if ( !n.isEqualNode( node ) )
            node.classList.remove( clName );
    } );
};

let previousId = 'didgital'; // получается, это у нас первый айдишник. конечно, выносить вот так, явно, сюда, не круто - но пока можно смело забить на это

/**
 * Эта функция просто возвращает ноду по ее идентификатору ( id )
 *
 * @param id
 * @return {HTMLElement | null}
 */
function getDivById( id ) {
    return document.getElementById( id );
}

console.log( 'script work.' );

/**
 * Показываем блок по его ID, информация о котором находится в аттрибуте data
 * @param node
 */
function showDiv( node ) {
    const id  = node.getAttribute( 'data' );
    const div = getDivById( id );

    // Если элемент, который мы хотим показать - уже показан, ничего делать не нужно.
    if ( div.classList.contains( 'prior' ) )
        return;

    // Если есть предыдущий показанный блок - мы можем смело его скрыть.
    if ( previousId ) {
        const previousDiv = getDivById( previousId );

        if ( previousDiv ) {
            previousDiv.classList.remove( 'prior' );
        }
    }

    // Теперь, просто покажем новый блок
    div.classList.add( 'prior' );

    previousId = id;
}

advantagesToggleArray.forEach( function ( node ) {
    node.onclick = function () {
        addOrRemoveTargetClass( node );

        showDiv( node );

        node.classList.toggle( 'pOnTarget' );
    };
} );


