import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/app/store'

interface IFilter {
  filter: string
}

const initialState: IFilter = {
  filter: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions
export default filterSlice
export const selectFilter = (state: RootState) => state.filter
