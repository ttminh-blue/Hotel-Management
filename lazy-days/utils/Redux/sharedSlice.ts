import { createSlice } from "@reduxjs/toolkit"

const initialValue = {

}

const sharedSlice = createSlice({
    name: "shared",
    initialState: initialValue,
    reducers: {

    }
})


const {} = sharedSlice.actions

export default sharedSlice.reducer;