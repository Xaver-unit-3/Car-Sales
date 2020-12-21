export const addFeature = (addPart) => {
  return { type: 'ADD_FEATURE', payload:  addPart };
}

export const removeFeature = (removePart) => {
  return { type: 'REMOVE_FEATURE', payload: removePart };
}