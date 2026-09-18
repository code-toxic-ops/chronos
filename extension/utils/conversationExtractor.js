function extractConversation() {
    console.log("extractConversation executed");

    const pathname = window.location.pathname;
    console.log("Current pathname:", pathname);

    const parts = pathname.split("/");
    const cIndex = parts.indexOf("c");

    if (cIndex < 0) {
        return null;
    }

    if (cIndex + 1 >= parts.length) {
        return null;
    }

    const conversationId = parts[cIndex + 1];

    return {
        conversationId
    };
}
