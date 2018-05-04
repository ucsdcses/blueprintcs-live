export default {
    data() {
        return {
            navExpand() {
                const hidden = Array.from(document.querySelectorAll('nav .hide-mobile'));
                hidden.forEach(elem => {
                    elem.classList.toggle('hidden-mobile');
                });
            }
        }
    },
    template: `
        <nav>
            <header>
                <slot name="header"></slot>
                <div @click="navExpand" class="nav-expand hidden-desktop">
                    <div class="hamburger"></div>
                </div>
            </header>
            <aside class="hide-mobile hidden-mobile">
                <slot></slot>
            </aside>
        </nav>
    `
}
