function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((element) => isMandatory(element, mandatoryKeys));
}

function isMandatory(dataObject, mandatoryKeys) {
  let dataKeys = Object.keys(dataObject);
  for (let i = 0; i < mandatoryKeys.length; i++) {
    if (dataKeys.includes(mandatoryKeys[i]) === false) {
      return false;
    }
  }
  return true;
}
