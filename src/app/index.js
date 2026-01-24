import Layout from "./views/Layout";
import routes from "./consts/routes";
import startTitleAnimation from "./helpers/startTitleAnimation";
import localeHandler from "./helpers/localeHandler";
import loadCssFile from "./helpers/loadCssFile";
import replacePath from "./helpers/replacePath";

import "styles/styles.sass";

const rootId = "root";

async function render(isTransition = false) {
    const path = routes[window.location.pathname] ?? routes["/404"];
    const root = document.getElementById(rootId);

    loadCssFile(path.name);
    startTitleAnimation(path.name);

    if (isTransition) {
        // Add fade-out class
        root.classList.add("page-transition-out");
        
        // Wait for fade-out animation
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    root.innerHTML = await Layout(
        (
            await import(`./views/${path.element}`)
        ).default,
        path
    );

    if (isTransition) {
        // Remove fade-out and add fade-in
        root.classList.remove("page-transition-out");
        root.classList.add("page-transition-in");
        
        // Remove fade-in class after animation completes
        setTimeout(() => {
            root.classList.remove("page-transition-in");
        }, 300);
    }

    // Re-attach navigation handlers after render
    attachNavigationHandlers();
}

function attachNavigationHandlers() {
    // Handle all internal navigation links
    document.querySelectorAll('a[href^="/"]').forEach(link => {
        // Skip if already has handler or is external
        if (link.dataset.navHandler) return;
        link.dataset.navHandler = "true";
        
        link.addEventListener("click", async (e) => {
            const href = link.getAttribute("href");
            
            // Only handle internal routes
            if (routes[href] || href === "/") {
                e.preventDefault();
                
                // Don't navigate if already on the same page
                if (window.location.pathname === href) return;
                
                // Update URL without reload
                window.history.pushState({}, "", href);
                
                // Render with transition
                await render(true);
                
                // Re-run locale handler for new content
                localeHandler();
            }
        });
    });
}

// Handle browser back/forward buttons
window.addEventListener("popstate", async () => {
    await render(true);
    localeHandler();
});

replacePath()
    .then(() => render(false))
    .then(() => localeHandler());
