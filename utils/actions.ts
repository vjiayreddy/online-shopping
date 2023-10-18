export const shouldForwardProp = <CustomProps extends Record<string, any>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey
): boolean => !props.includes(prop as string);

export const handleEmojiRating = (
  checkedId: any,
  fieldName: string,
  getValues: any
) => {
  const { [`${fieldName}`]: ids } = getValues();
  const newIds = ids?.includes(checkedId)
    ? ids?.filter((id: any) => id !== checkedId)
    : [...(ids ?? []), checkedId];
  return newIds;
};

export const stringReplaceWithWhiteSpace = (
  value: string,
  replaceWith: string
) => {
  const newValue = value.toLowerCase().replace(/\s/g, replaceWith);
  return newValue;
};
