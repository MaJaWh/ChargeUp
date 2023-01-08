export const fetchConnectorTypes = async () => {
  const res = await fetch(`api/retrieve/type/format/json/`);
  const json = await res.json();
  return Object.values(json.ConnectorType);
};
