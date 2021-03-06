export const SET_PAGES = "SET_PAGES";
export const SET_SIDEBAR_LINKS = "SET_SIDEBAR_LINKS";
export const SET_HEADER_LINKS = "SET_HEADER_LINKS";
export const SET_NAVBAR_LINKS = "SET_NAVBAR_LINKS";
export const IS_LOADED = "IS_LOADED";

export const SHOW_MOBILE_MODAL = "SHOW_MOBILE_MODAL";
export const HIDE_MOBILE_MODAL = "HIDE_MOBILE_MODAL";
export const TOGGLE_MOBILE_MODAL = "TOGGLE_MOBILE_MODAL";


export const showMobileModal = (modal_content, image_fluid) => {
    console.log(modal_content)
    return {
        type: SHOW_MOBILE_MODAL,
        content: modal_content,
        image_fluid: image_fluid
    }
}

export const hideMobileModal = () => {
    return {
        type: HIDE_MOBILE_MODAL
    }
}

export const toggleMobileModal = () => {
    return {
        type: HIDE_MOBILE_MODAL
    }
}