export const reducer = (state, {type, payload}) => {
   return {
      refetch: {...state, refetch: payload},
      state
   }[type || "state"]
}