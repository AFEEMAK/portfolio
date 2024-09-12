import { create } from 'zustand';

export const useFeatureStore = create((set)=>({
    inViewFeature : null,
    setInViewFeature: (feature=null) => set({inViewFeature: feature })
}))

