const shotern = (title) => {
    const splitTitle = title.split(" ");
    const shortTitle = `${splitTitle[0]} ${splitTitle[1]}`;
    return shortTitle;
}
const isInCard = (state , id) => {
    const result = !!state.selectedItems.find((item) => item.id === id);
    return result;
}
const getQuantity = (state , id) => {
    const result = state.selectedItems.findIndex((item) => item.id === id);
    if(result === -1){
        return false;
    }else {
        return state.selectedItems[result].quantity;
    }
}

export {shotern , isInCard , getQuantity};