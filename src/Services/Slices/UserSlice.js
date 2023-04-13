import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    users : [],
    error : null,
    status : "",
    message:""
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async ()=>{
        const response = await axios.get('http://localhost:3004/users')
        return response.data
        
    }
)

export const addUser = createAsyncThunk(
    'users/addUser',
    async (values)=>{
        const response = await axios.post('http://localhost:3004/users',values)
        return response.data
        
    }
)
export const deleteUser = createAsyncThunk(
    'users/deleteUsers',
    async (id)=>{
        const response = await axios.delete(`http://localhost:3004/users/${id}`)
        return response.data
        
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (values)=>{
        const response = await axios.put(`http://localhost:3004/users/${values.id}`,values)
        return response.data
    }
)

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchUsers.pending , (state)=>{
            state.status = "loading"
            
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.status = "succeeded"
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addUser.pending , (state)=>{
            state.status = "loading"
        })
        .addCase(addUser.fulfilled, (state, action)=>{
            state.status = "succeeded"
            state.users.push(action.payload);
            state.message = "User has been created successfully.";
        })
        .addCase(addUser.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteUser.pending , (state)=>{
            state.status = "loading"
        })
        .addCase(deleteUser.fulfilled, (state, action)=>{
            state.status = "succeeded"
            state.users.splice(action.payload, 1);
            state.message = "User has been deleted successfully.";
        })
        .addCase(deleteUser.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(updateUser.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(updateUser.fulfilled, (state, action)=>{
            state.status = "succeeded"
            const updatedUser = action.payload;
            const index = state.users?.findIndex((user) => user?.id === updatedUser?.id);
            state.users[index] = updatedUser;
            state.message = "User has been Edited successfully.";
        })
        .addCase(updateUser.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })

    }
})

export default userSlice.reducer;