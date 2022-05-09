/**
 * A SCSS module, containing a mapping from pre-compiled class names to
 * compiled class names.
 */
declare module "*.module.scss" {
  const styleMap: Record<string, string | undefined>;

  /** A mapping from pre-compiled class names to compiled class names. */
  export default styleMap;
}