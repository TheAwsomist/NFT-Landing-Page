const initialstate = {
    nfts:[]
};

export const NftReducer = (state = initialstate, action) =>{

    switch (action.type) {
        case "nftimport":
            return{
                ...state,
                nfts:action.payload
            }
    
        default:
            return state;
    }
}