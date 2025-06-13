import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_attribute_value, h as escape_object, e as escape, i as createEventDispatcher, v as validate_component, j as add_classes, k as add_attribute, l as each, n as compute_slots, o as add_styles, a as subscribe, p as set_store_value, q as null_to_empty } from "../../chunks/ssr.js";
import "colorthief";
import { d as derived, w as writable } from "../../chunks/index.js";
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>`;
});
const Copy$1 = Copy;
const CopyButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["feedback", "feedbackTimeout", "iconDescription", "text", "copy"]);
  let { feedback = "Copied!" } = $$props;
  let { feedbackTimeout = 2e3 } = $$props;
  let { iconDescription = "Copy to clipboard" } = $$props;
  let { text } = $$props;
  let { copy = async (text2) => {
    try {
      await navigator.clipboard.writeText(text2);
    } catch (e) {
      console.log(e);
    }
  } } = $$props;
  createEventDispatcher();
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.feedbackTimeout === void 0 && $$bindings.feedbackTimeout && feedbackTimeout !== void 0)
    $$bindings.feedbackTimeout(feedbackTimeout);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.copy === void 0 && $$bindings.copy && copy !== void 0)
    $$bindings.copy(copy);
  return `<button${spread(
    [
      { type: "button" },
      { "aria-live": "polite" },
      {
        "aria-label": escape_attribute_value(iconDescription)
      },
      {
        title: escape_attribute_value(iconDescription)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--copy-btn bx--copy   "
    }
  )}>${validate_component(Copy$1, "Copy").$$render($$result, { class: "bx--snippet__icon" }, {}, {})} <span aria-hidden="true"${add_classes("bx--assistive-text bx--copy-btn__feedback".trim())}>${escape(feedback)}</span></button>`;
});
const CopyButton$1 = CopyButton;
const WarningFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path><path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path></svg>`;
});
const WarningFilled$1 = WarningFilled;
const WarningAltFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z" data-icon-path="inner-path"></path><path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"></path><path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"></path></svg>`;
});
const WarningAltFilled$1 = WarningAltFilled;
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "type",
    "open",
    "light",
    "disabled",
    "invalid",
    "invalidText",
    "warn",
    "warnText"
  ]);
  let { size = void 0 } = $$props;
  let { type = "default" } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  return `<div${spread(
    [
      { role: "listbox" },
      { tabindex: "-1" },
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box " + (size === "sm" ? "bx--list-box--sm" : "") + " " + (size === "xl" ? "bx--list-box--xl" : "") + " " + (type === "inline" ? "bx--list-box--inline" : "") + " " + (disabled ? "bx--list-box--disabled" : "") + " " + (open ? "bx--list-box--expanded" : "") + " " + (light ? "bx--list-box--light" : "") + " " + (!invalid && warn ? "bx--list-box--warning" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</div> ${invalid ? `<div${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!invalid && warn ? `<div${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}`;
});
const ListBox$1 = ListBox;
const ListBoxMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id", "ref"]);
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<div${spread(
    [
      { role: "listbox" },
      { id: "menu-" + escape(id, true) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__menu"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ListBoxMenu$1 = ListBoxMenu;
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;
});
const ChevronDown$1 = ChevronDown;
const ListBoxMenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translationId;
  let description;
  let $$restProps = compute_rest_props($$props, ["open", "translationIds", "translateWithId"]);
  let { open = false } = $$props;
  const translationIds = { close: "close", open: "open" };
  let { translateWithId = (id) => defaultTranslations[id] } = $$props;
  const defaultTranslations = {
    [translationIds.close]: "Close menu",
    [translationIds.open]: "Open menu"
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  translationId = open ? translationIds.close : translationIds.open;
  description = translateWithId?.(translationId) ?? defaultTranslations[translationId];
  return ` <div${spread([escape_object($$restProps)], {
    classes: "bx--list-box__menu-icon " + (open ? "bx--list-box__menu-icon--open" : "")
  })}>${validate_component(ChevronDown$1, "ChevronDown").$$render(
    $$result,
    {
      "aria-label": description,
      title: description
    },
    {},
    {}
  )}</div>`;
});
const ListBoxMenuIcon$1 = ListBoxMenuIcon;
const ListBoxMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isTruncated;
  let title;
  let $$restProps = compute_rest_props($$props, ["active", "highlighted", "disabled"]);
  let { active = false } = $$props;
  let { highlighted = false } = $$props;
  let { disabled = false } = $$props;
  let ref = null;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  isTruncated = ref?.offsetWidth < ref?.scrollWidth;
  title = isTruncated ? ref?.innerText : void 0;
  {
    if (highlighted && ref && !ref.matches(":hover")) {
      ref.scrollIntoView({ block: "nearest" });
    }
  }
  return `<div${spread(
    [
      { role: "option" },
      { tabindex: "-1" },
      {
        "aria-selected": escape_attribute_value(active)
      },
      {
        disabled: (disabled ? true : void 0) || null
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__menu-item " + (active ? "bx--list-box__menu-item--active" : "") + " " + (highlighted || active ? "bx--list-box__menu-item--highlighted" : "")
    }
  )}><div${add_attribute("title", title, 0)}${add_classes("bx--list-box__menu-item__option".trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const ListBoxMenuItem$1 = ListBoxMenuItem;
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`;
});
const Close$1 = Close;
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inline;
  let selectedItem;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "itemToString",
    "selectedId",
    "type",
    "direction",
    "size",
    "open",
    "light",
    "disabled",
    "titleText",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "translateWithId",
    "id",
    "name",
    "ref"
  ]);
  let { items = [] } = $$props;
  let { itemToString = (item) => item.text || item.id } = $$props;
  let { selectedId } = $$props;
  let { type = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { titleText = "" } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { label = void 0 } = $$props;
  let { hideLabel = false } = $$props;
  let { translateWithId = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  let highlightedIndex = -1;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemToString === void 0 && $$bindings.itemToString && itemToString !== void 0)
    $$bindings.itemToString(itemToString);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0)
    $$bindings.selectedId(selectedId);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0)
    $$bindings.titleText(titleText);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  inline = type === "inline";
  selectedItem = items.find((item) => item.id === selectedId);
  {
    if (!open) {
      highlightedIndex = -1;
    }
  }
  return ` <div${spread([escape_object($$restProps)], {
    classes: "bx--dropdown__wrapper bx--list-box__wrapper " + (inline ? "bx--dropdown__wrapper--inline" : "") + " " + (inline ? "bx--list-box__wrapper--inline" : "") + " " + (inline && invalid ? "bx--dropdown__wrapper--inline--invalid" : "")
  })}>${titleText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${escape(titleText)}</label>` : ``} ${validate_component(ListBox$1, "ListBox").$$render(
    $$result,
    {
      role: void 0,
      type,
      size,
      name,
      "aria-label": $$props["aria-label"],
      class: "bx--dropdown \n      " + (direction === "top" && "bx--list-box--up") + " \n      " + (invalid && "bx--dropdown--invalid") + " \n      " + (!invalid && warn && "bx--dropdown--warning") + " \n      " + (open && "bx--dropdown--open") + "\n      " + (size === "sm" && "bx--dropdown--sm") + "\n      " + (size === "xl" && "bx--dropdown--xl") + "\n      " + (inline && "bx--dropdown--inline") + "\n      " + (disabled && "bx--dropdown--disabled") + "\n      " + (light && "bx--dropdown--light"),
      disabled,
      open,
      invalid,
      invalidText,
      light,
      warn,
      warnText
    },
    {},
    {
      default: () => {
        return `${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled$1, "WarningAltFilled").$$render(
          $$result,
          {
            class: "bx--list-box__invalid-icon bx--list-box__invalid-icon--warning"
          },
          {},
          {}
        )}` : ``} <button type="button" tabindex="0"${add_attribute("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${add_attribute("translatewithid", translateWithId, 0)}${add_attribute("id", id, 0)}${add_classes("bx--list-box__field".trim())}${add_attribute("this", ref, 0)}><span${add_classes("bx--list-box__label".trim())}>${selectedItem ? `${escape(itemToString(selectedItem))}` : `${escape(label)}`}</span> ${validate_component(ListBoxMenuIcon$1, "ListBoxMenuIcon").$$render($$result, { translateWithId, open }, {}, {})}</button> ${open ? `${validate_component(ListBoxMenu$1, "ListBoxMenu").$$render($$result, { "aria-labelledby": id, id }, {}, {
          default: () => {
            return `${each(items, (item, i) => {
              return `${validate_component(ListBoxMenuItem$1, "ListBoxMenuItem").$$render(
                $$result,
                {
                  id: item.id,
                  active: selectedId === item.id,
                  highlighted: highlightedIndex === i,
                  disabled: item.disabled
                },
                {},
                {
                  default: () => {
                    return `${slots.default ? slots.default({ item, index: i }) : ` ${escape(itemToString(item))} `} `;
                  }
                }
              )}`;
            })}`;
          }
        })}` : ``}`;
      }
    }
  )} ${!inline && !invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const Dropdown$1 = Dropdown;
const CheckmarkFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"></path><path fill="none" d="M14 21.591L9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z" data-icon-path="inner-path"></path></svg>`;
});
const CheckmarkFilled$1 = CheckmarkFilled;
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spinnerRadius;
  let $$restProps = compute_rest_props($$props, ["small", "active", "withOverlay", "description"]);
  let { small = false } = $$props;
  let { active = true } = $$props;
  let { withOverlay = true } = $$props;
  let { description = "loading" } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.withOverlay === void 0 && $$bindings.withOverlay && withOverlay !== void 0)
    $$bindings.withOverlay(withOverlay);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  spinnerRadius = small ? "42" : "44";
  return `${withOverlay ? `<div${spread([escape_object($$restProps)], {
    classes: "bx--loading-overlay " + (!active ? "bx--loading-overlay--stop" : "")
  })}><div aria-atomic="true"${add_attribute("aria-live", active ? "assertive" : "off", 0)}${add_classes(("bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")).trim())}><svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div></div>` : `<div${spread(
    [
      { "aria-atomic": "true" },
      {
        "aria-live": escape_attribute_value(active ? "assertive" : "off")
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")
    }
  )}><svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div>`}`;
});
const Loading$1 = Loading;
const Filename = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["status", "iconDescription", "invalid"]);
  let { status = "uploading" } = $$props;
  let { iconDescription = "" } = $$props;
  let { invalid = false } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  return `${status === "uploading" ? `${validate_component(Loading$1, "Loading").$$render($$result, Object.assign({}, { description: iconDescription }, $$restProps, { small: true }, { withOverlay: false }), {}, {})}` : ``} ${status === "edit" ? `${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--file-invalid" }, {}, {})}` : ``} <button${spread(
    [
      {
        "aria-label": escape_attribute_value(iconDescription)
      },
      { type: "button" },
      { tabindex: "0" },
      escape_object($$restProps)
    ],
    { classes: "bx--file-close" }
  )}>${validate_component(Close$1, "Close").$$render($$result, {}, {}, {})}</button>` : ``} ${status === "complete" ? `${validate_component(CheckmarkFilled$1, "CheckmarkFilled").$$render($$result, Object.assign({}, { "aria-label": iconDescription }, { title: iconDescription }, { class: "bx--file-complete" }, $$restProps), {}, {})}` : ``}`;
});
const Filename$1 = Filename;
const FileUploaderButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "accept",
    "files",
    "multiple",
    "disabled",
    "disableLabelChanges",
    "kind",
    "size",
    "labelText",
    "role",
    "tabindex",
    "id",
    "name",
    "ref"
  ]);
  let { accept = [] } = $$props;
  let { files = [] } = $$props;
  let { multiple = false } = $$props;
  let { disabled = false } = $$props;
  let { disableLabelChanges = false } = $$props;
  let { kind = "primary" } = $$props;
  let { size = "small" } = $$props;
  let { labelText = "Add file" } = $$props;
  let { role = "button" } = $$props;
  let { tabindex = "0" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  let initialLabelText = labelText;
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0)
    $$bindings.accept(accept);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.disableLabelChanges === void 0 && $$bindings.disableLabelChanges && disableLabelChanges !== void 0)
    $$bindings.disableLabelChanges(disableLabelChanges);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ref && files.length === 0) {
      labelText = initialLabelText;
      ref.value = "";
    }
  }
  return `  <label${add_attribute("aria-disabled", disabled, 0)}${add_attribute("for", id, 0)}${add_attribute("tabindex", disabled ? "-1" : tabindex, 0)}${add_classes(("bx--btn " + (disabled ? "bx--btn--disabled" : "") + " " + (kind === "primary" ? "bx--btn--primary" : "") + " " + (kind === "secondary" ? "bx--btn--secondary" : "") + " " + (kind === "tertiary" ? "bx--btn--tertiary" : "") + " " + (kind === "ghost" ? "bx--btn--ghost" : "") + " " + (kind === "danger" ? "bx--btn--danger" : "") + " " + (kind === "danger-tertiary" ? "bx--btn--danger-tertiary" : "") + " " + (kind === "danger-ghost" ? "bx--btn--danger-ghost" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")).trim())}><span${add_attribute("role", role, 0)}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</span></label> <input${spread(
    [
      { type: "file" },
      { tabindex: "-1" },
      { accept: escape_attribute_value(accept) },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      { multiple: multiple || null },
      { name: escape_attribute_value(name) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--visually-hidden"
    }
  )}>`;
});
const FileUploaderButton$1 = FileUploaderButton;
const FileUploader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "status",
    "disabled",
    "accept",
    "files",
    "multiple",
    "clearFiles",
    "labelTitle",
    "labelDescription",
    "kind",
    "size",
    "buttonLabel",
    "iconDescription",
    "name"
  ]);
  let $$slots = compute_slots(slots);
  let { status = "uploading" } = $$props;
  let { disabled = false } = $$props;
  let { accept = [] } = $$props;
  let { files = [] } = $$props;
  let { multiple = false } = $$props;
  const clearFiles = () => {
    files = [];
  };
  let { labelTitle = "" } = $$props;
  let { labelDescription = "" } = $$props;
  let { kind = "primary" } = $$props;
  let { size = "small" } = $$props;
  let { buttonLabel = "" } = $$props;
  let { iconDescription = "Provide icon description" } = $$props;
  let { name = "" } = $$props;
  createEventDispatcher();
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0)
    $$bindings.accept(accept);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.clearFiles === void 0 && $$bindings.clearFiles && clearFiles !== void 0)
    $$bindings.clearFiles(clearFiles);
  if ($$props.labelTitle === void 0 && $$bindings.labelTitle && labelTitle !== void 0)
    $$bindings.labelTitle(labelTitle);
  if ($$props.labelDescription === void 0 && $$bindings.labelDescription && labelDescription !== void 0)
    $$bindings.labelDescription(labelDescription);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0)
    $$bindings.buttonLabel(buttonLabel);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `  <div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}>${labelTitle || $$slots.labelTitle ? `<p${add_classes(("bx--file--label " + (disabled ? "bx--label-description--disabled" : "")).trim())}>${slots.labelTitle ? slots.labelTitle({}) : ` ${escape(labelTitle)} `}</p>` : ``} ${labelDescription || $$slots.labelDescription ? `<p${add_classes(("bx--label-description " + (disabled ? "bx--label-description--disabled" : "")).trim())}>${slots.labelDescription ? slots.labelDescription({}) : ` ${escape(labelDescription)} `}</p>` : ``} ${validate_component(FileUploaderButton$1, "FileUploaderButton").$$render(
    $$result,
    {
      disabled,
      disableLabelChanges: true,
      labelText: buttonLabel,
      accept,
      name,
      multiple,
      kind,
      size
    },
    {},
    {}
  )} <div${add_classes("bx--file-container".trim())}>${each(files, ({ name: name2 }, i) => {
    return `<span${add_classes("bx--file__selected-file".trim())}><p${add_classes("bx--file-filename".trim())}>${escape(name2)}</p> <span${add_classes("bx--file__state-container".trim())}>${validate_component(Filename$1, "Filename").$$render($$result, { iconDescription, status }, {}, {})}</span> </span>`;
  })}</div></div>`;
});
const FileUploader$1 = FileUploader;
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelId;
  let range;
  let left;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "max",
    "maxLabel",
    "min",
    "minLabel",
    "step",
    "stepMultiplier",
    "required",
    "inputType",
    "disabled",
    "light",
    "hideTextInput",
    "fullWidth",
    "id",
    "invalid",
    "labelText",
    "hideLabel",
    "name",
    "ref"
  ]);
  let { value = 0 } = $$props;
  let { max = 100 } = $$props;
  let { maxLabel = "" } = $$props;
  let { min = 0 } = $$props;
  let { minLabel = "" } = $$props;
  let { step = 1 } = $$props;
  let { stepMultiplier = 4 } = $$props;
  let { required = false } = $$props;
  let { inputType = "number" } = $$props;
  let { disabled = false } = $$props;
  let { light = false } = $$props;
  let { hideTextInput = false } = $$props;
  let { fullWidth = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { invalid = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let trackRef = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.maxLabel === void 0 && $$bindings.maxLabel && maxLabel !== void 0)
    $$bindings.maxLabel(maxLabel);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.minLabel === void 0 && $$bindings.minLabel && minLabel !== void 0)
    $$bindings.minLabel(minLabel);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.stepMultiplier === void 0 && $$bindings.stepMultiplier && stepMultiplier !== void 0)
    $$bindings.stepMultiplier(stepMultiplier);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0)
    $$bindings.inputType(inputType);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.hideTextInput === void 0 && $$bindings.hideTextInput && hideTextInput !== void 0)
    $$bindings.hideTextInput(hideTextInput);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  labelId = `label-${id}`;
  range = max - min;
  {
    {
      if (value <= min) {
        value = min;
      } else if (value >= max) {
        value = max;
      }
      if (!disabled) {
        dispatch("change", value);
      }
    }
  }
  left = (value - min) / range * 100;
  return `   <div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><label${add_attribute("for", id, 0)}${add_attribute("id", labelId, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label> <div${add_classes("bx--slider-container".trim())}${add_styles({ "width": fullWidth && "100%" })}><span${add_classes("bx--slider__range-label".trim())}>${escape(minLabel || min)}</span> <div role="presentation" tabindex="-1"${add_classes(("bx--slider " + (disabled ? "bx--slider--disabled" : "")).trim())}${add_styles({
    "max-width": fullWidth ? "none" : void 0
  })}${add_attribute("this", ref, 0)}><div role="slider" tabindex="0"${add_attribute("aria-valuemax", max, 0)}${add_attribute("aria-valuemin", min, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("aria-labelledby", labelId, 0)}${add_attribute("id", id, 0)}${add_classes("bx--slider__thumb".trim())}${add_styles({ "left": `${left}%` })}></div> <div${add_classes("bx--slider__track".trim())}${add_attribute("this", trackRef, 0)}></div> <div${add_classes("bx--slider__filled-track".trim())}${add_styles({
    "transform": `translate(0, -50%) scaleX(${left / 100})`
  })}></div></div> <span${add_classes("bx--slider__range-label".trim())}>${escape(maxLabel || max)}</span> <input${add_attribute("type", hideTextInput ? "hidden" : inputType, 0)} id="${"input-" + escape(id, true)}"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}${add_attribute("aria-labelledby", $$props["aria-label"] ? void 0 : labelId, 0)}${add_attribute("aria-label", $$props["aria-label"] || "Slider number input", 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("min", min, 0)}${add_attribute("max", max, 0)}${add_attribute("step", step, 0)}${add_attribute("data-invalid", invalid || null, 0)}${add_attribute("aria-invalid", invalid || null, 0)}${add_classes(("bx--text-input bx--slider-text-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "")).trim())}></div></div>`;
});
const Slider$1 = Slider;
function hexToRGB(str) {
  var hex = str.replace("#", "");
  var num = parseInt(hex, 16);
  return { r: num >> 16, g: num >> 8 & 255, b: num & 255 };
}
const bgColor = writable("#333333");
const overlayColor = writable("#333399");
const fgColor = writable("#CCCCCC");
const opacity = writable(0.5);
const computedColor = derived([bgColor, overlayColor, opacity], ([$bgColor, $overlayColor, $opacity]) => {
  let bg = hexToRGB($bgColor);
  let ol = hexToRGB($overlayColor);
  let blendedColor = {
    r: Math.round((1 - $opacity) * bg.r + $opacity * ol.r),
    g: Math.round((1 - $opacity) * bg.g + $opacity * ol.g),
    b: Math.round((1 - $opacity) * bg.b + $opacity * ol.b)
  };
  return `#${blendedColor.r.toString(16).padStart(2, "0")}${blendedColor.g.toString(16).padStart(2, "0")}${blendedColor.b.toString(16).padStart(2, "0")}`;
});
const contrastRatio = derived([computedColor, fgColor], ([$computedColor, $fgColor]) => {
  const color1 = hexToRGB($computedColor);
  const color2 = hexToRGB($fgColor);
  const getRelativeLuminance = (color) => {
    const sRGB = Object.values(color).map((value) => {
      value /= 255;
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  };
  const luminance1 = getRelativeLuminance(color1);
  const luminance2 = getRelativeLuminance(color2);
  const [lighter, darker] = luminance1 > luminance2 ? [luminance1, luminance2] : [luminance2, luminance1];
  const contrastRatio2 = (lighter + 0.05) / (darker + 0.05);
  return Number(contrastRatio2.toFixed(2));
});
function cssizer(color) {
  if (typeof color === "string") {
    color = hexToRGB(color);
  }
  let triad = Object.keys(color);
  if (triad.length !== 3) {
    return "0, 0, 0";
  }
  return `${color[triad[0]]}, ${color[triad[1]]}, ${color[triad[2]]}`;
}
const css$1 = {
  code: ".slider-component.svelte-9ez1ba{z-index:3;position:relative;align-self:center;display:flex;flex-direction:column;justify-content:end;align-items:center;width:fit-content}h2.svelte-9ez1ba,.slider-wrapper.svelte-9ez1ba{width:fit-content}.slider-wrapper.svelte-9ez1ba{padding:0 33px;width:100%;display:flex;justify-content:center;align-items:center;text-align:center;background-color:#393939}.bx--form-item{text-align:center;justify-content:center;align-items:center;width:fit-content}",
  map: `{"version":3,"file":"Slider.svelte","sources":["Slider.svelte"],"sourcesContent":["<script>\\n\\timport { Slider } from 'carbon-components-svelte';\\n\\timport { cssizer } from '$lib';\\n\\t// import { updateComputedColor } from '$lib/colorUtils.js';\\n\\timport { bgColor, overlayColor, opacity, fgColor, computedColor } from '$lib';\\n\\t// let localOpacity = opacity.subscribe((value) => {\\n\\t// \\treturn value;\\n\\t// });\\n\\t// $: console.log('localOpacity', localOpacity);\\n<\/script>\\n\\n<div class=\\"slider-component\\">\\n\\t<h2 style=\\"color: rgb({cssizer($fgColor)});\\">\\n\\t\\tOverlay Opacity: {$opacity.toFixed(2)}%\\n\\t</h2>\\n\\t<div class=\\"slider-wrapper\\" id=\\"slider\\">\\n\\t\\t<Slider hideTextInput bind:value={$opacity} min={0} max={1} step={0.01} />\\n\\t</div>\\n\\t<!-- on:change={updateComputedColor} -->\\n</div>\\n\\n<style>\\n\\t.slider-component {\\n\\t\\tz-index: 3;\\n\\n\\t\\tposition: relative;\\n\\t\\t/* position: absolute; */\\n\\t\\talign-self: center;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: end;\\n\\t\\talign-items: center;\\n\\t\\twidth: fit-content;\\n\\t}\\n\\th2,\\n\\t.slider-wrapper {\\n\\t\\twidth: fit-content;\\n\\t}\\n\\t.slider-wrapper {\\n\\t\\tpadding: 0 33px;\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\ttext-align: center;\\n\\t\\tbackground-color: #393939;\\n\\t}\\n\\t:global(.bx--form-item) {\\n\\t\\ttext-align: center;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\twidth: fit-content;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsBC,+BAAkB,CACjB,OAAO,CAAE,CAAC,CAEV,QAAQ,CAAE,QAAQ,CAElB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,GAAG,CACpB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,WACR,CACA,gBAAE,CACF,6BAAgB,CACf,KAAK,CAAE,WACR,CACA,6BAAgB,CACf,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,OACnB,CACQ,cAAgB,CACvB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,WACR"}`
};
const Slider_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $fgColor, $$unsubscribe_fgColor;
  let $opacity, $$unsubscribe_opacity;
  $$unsubscribe_fgColor = subscribe(fgColor, (value) => $fgColor = value);
  $$unsubscribe_opacity = subscribe(opacity, (value) => $opacity = value);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="slider-component svelte-9ez1ba"><h2 style="${"color: rgb(" + escape(cssizer($fgColor), true) + ");"}" class="svelte-9ez1ba">Overlay Opacity: ${escape($opacity.toFixed(2))}%</h2> <div class="slider-wrapper svelte-9ez1ba" id="slider">${validate_component(Slider$1, "Slider").$$render(
      $$result,
      {
        hideTextInput: true,
        min: 0,
        max: 1,
        step: 0.01,
        value: $opacity
      },
      {
        value: ($$value) => {
          $opacity = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  </div>`;
  } while (!$$settled);
  $$unsubscribe_fgColor();
  $$unsubscribe_opacity();
  return $$rendered;
});
const css = {
  code: "blockquote.svelte-uxfm2w.svelte-uxfm2w{padding:11px 11px 11px 33px;border-left:2px solid #cccc;background:rgba(0, 0, 0, 0.11);display:flex;flex-direction:column;gap:11px}.bx--copy-btn__feedback{overflow-wrap:break-word !important;max-width:200px}.lightgreen.svelte-uxfm2w.svelte-uxfm2w{color:lightgreen !important}.yellow.svelte-uxfm2w.svelte-uxfm2w{color:yellow !important}.pink.svelte-uxfm2w.svelte-uxfm2w{color:pink !important}.rgb.svelte-uxfm2w p.svelte-uxfm2w{display:flex;justify-content:start;align-items:center;gap:11px;padding:4px;margin-block:4px;&:last-child {\n			justify-content: end;\n		}}.photo-credit.svelte-uxfm2w.svelte-uxfm2w{z-index:4;position:absolute;top:0;right:0;padding:3px;margin:3px}.photo-credit.hide.svelte-uxfm2w.svelte-uxfm2w{display:none}.teaser.svelte-uxfm2w.svelte-uxfm2w{display:block;background:rgba(0, 0, 0, 0.33);border:1px solid #ccc0;color:#ccc;height:33px;line-height:33px;padding-inline:11px;cursor:pointer}.teaser.svelte-uxfm2w.svelte-uxfm2w:hover,.teaser.open.svelte-uxfm2w.svelte-uxfm2w{background:rgba(0, 0, 0, 0.76);border:1px solid #ccc;height:33px;line-height:33px;padding-inline:11px}.more-info-content.svelte-uxfm2w.svelte-uxfm2w{display:none}.open.svelte-uxfm2w~.more-info-content.svelte-uxfm2w{padding:11px;display:flex;flex-direction:column;gap:11px;height:100%}.bx--list-box__menu-item__option{margin:0;padding:0;& p {\n			margin: 0;\n			padding: 0;\n			height: 100%;\n		}}.bx--copy-btn.bx--copy{background:rgba(0, 0, 0, 0.33);border:1px solid rgba(0, 0, 0, 0.77);&:hover {\n			background: rgba(0, 0, 0, 0.77);\n			border: 1px solid rgba(0, 0, 0, 1);\n		}}.bx--dropdown{background-color:var(--active-color) !important}.color-picker.svelte-uxfm2w.svelte-uxfm2w{border:0;padding:0;width:100%;height:33px}.input-wrapper.svelte-uxfm2w.svelte-uxfm2w{display:flex;gap:11px;height:64px}body{height:100%;min-height:100vh;display:flex;justify-content:center;align-items:center;transition:250ms;& * {\n			box-sizing: border-box;\n			transition: 250ms;\n		}}.wrapper.svelte-uxfm2w.svelte-uxfm2w{overflow:hidden;position:relative;background-size:cover;display:flex;flex-direction:column}.infobox.svelte-uxfm2w.svelte-uxfm2w{position:relative;flex:1;display:flex;position:relative}@media screen and (max-width: 876px){.wrapper.svelte-uxfm2w.svelte-uxfm2w{height:100%;width:100%}.infobox.svelte-uxfm2w.svelte-uxfm2w{align-items:stretch;justify-content:start;flex-direction:column}#file-upload.svelte-uxfm2w.svelte-uxfm2w,#color-display.svelte-uxfm2w.svelte-uxfm2w{align-self:stretch}}@media screen and (min-width: 876px){.wrapper.svelte-uxfm2w.svelte-uxfm2w{min-height:100dvh;width:100dvw}.infobox.svelte-uxfm2w.svelte-uxfm2w{justify-content:space-between;flex-direction:row}#color-display.svelte-uxfm2w.svelte-uxfm2w{align-self:end}#file-upload.svelte-uxfm2w.svelte-uxfm2w{align-self:start}}.wrapper.svelte-uxfm2w.svelte-uxfm2w,.overlay.svelte-uxfm2w.svelte-uxfm2w,.underlay.svelte-uxfm2w.svelte-uxfm2w{overflow:hidden}.overlay.svelte-uxfm2w.svelte-uxfm2w,.underlay.svelte-uxfm2w.svelte-uxfm2w{position:absolute;top:0;left:0;right:0;bottom:0}.underlay.svelte-uxfm2w.svelte-uxfm2w{clip-path:polygon(0 0, 100% 0, 100% 33%, 33% 100%, 0 100%);object-fit:cover;height:100%;width:100%;z-index:1}.overlay.svelte-uxfm2w.svelte-uxfm2w{z-index:2}h1.svelte-uxfm2w.svelte-uxfm2w{position:relative;z-index:3;width:100%;text-align:center;color:var(--fg-color, #ccc) !important}.lilwrapper.svelte-uxfm2w.svelte-uxfm2w{position:relative;z-index:3;background-color:#333}#file-upload.svelte-uxfm2w.svelte-uxfm2w,#color-display.svelte-uxfm2w.svelte-uxfm2w{padding:33px;margin:33px}#color-display.svelte-uxfm2w.svelte-uxfm2w{max-width:600px}#file-upload.svelte-uxfm2w.svelte-uxfm2w{display:flex;flex-direction:column;gap:11px;max-width:600px}#color-display.svelte-uxfm2w p.svelte-uxfm2w{font-family:'Monaspace Xenon';color:#ccc;&:last-child {\n			margin-top: 11px;\n			text-align: right;\n		}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { browser } from \\"$app/environment\\";\\nimport ColorThief from \\"colorthief\\";\\nimport \\"carbon-components-svelte/css/g90.css\\";\\nimport Slider from \\"$lib/Slider.svelte\\";\\nimport { CopyButton, Dropdown, FileUploader } from \\"carbon-components-svelte\\";\\nimport {\\n  computedColor,\\n  contrastRatio,\\n  objectify,\\n  bgColor,\\n  overlayColor,\\n  fgColor,\\n  opacity,\\n  cssizer\\n} from \\"$lib\\";\\nimport { hexToRGB, rgbToHex } from \\"$lib/colorUtils\\";\\nlet colorThief, palette = [], imageUrl = \\"tunnel.jpg\\", bgColorPicker = \\"#3c6d88\\", overlayColorPicker = \\"#b9cfdd\\", fgColorPicker = \\"#182a2f\\", imageFilename = \\"\\";\\n$:\\n  useImageColors = imageUrl !== \\"tunnel.jpg\\" && palette && palette.length === 5;\\n$:\\n  schema = [\\n    { loc: \\"Background\\", id: 0 },\\n    { loc: \\"Overlay\\", id: 2 },\\n    { loc: \\"Foreground\\", id: 4 }\\n  ];\\n$:\\n  $bgColor = useImageColors && palette[schema[0].id] ? palette[schema[0].id] : bgColorPicker;\\n$:\\n  $overlayColor = useImageColors && palette[schema[1].id] ? palette[schema[1].id] : overlayColorPicker;\\n$:\\n  $fgColor = useImageColors && palette[schema[2].id] ? palette[schema[2].id] : fgColorPicker;\\nonMount(async () => {\\n  colorThief = new ColorThief();\\n});\\nasync function handleFileUpload(event) {\\n  const file = event.detail.length > 0 ? event.detail[0] : false;\\n  if (file) {\\n    imageFilename = file.name;\\n    const reader = new FileReader();\\n    reader.onload = async function(event2) {\\n      imageUrl = event2.target.result;\\n      const img = new Image();\\n      img.src = event2.target.result;\\n      if (img && img.complete) {\\n        palette = colorThief.getPalette(img, 5).map((color) => rgbToHex(objectify(color)));\\n      } else {\\n        img.addEventListener(\\"load\\", function() {\\n          palette = colorThief.getPalette(img, 5).map((color) => rgbToHex(objectify(color)));\\n        });\\n      }\\n    };\\n    reader.readAsDataURL(file);\\n  }\\n}\\n$: {\\n  if (browser) {\\n    document.body.style.backgroundColor = $bgColor;\\n  }\\n}\\nlet open = false;\\n$:\\n  resultRGB = hexToRGB($computedColor);\\n$:\\n  fixUsersBadContrast = $contrastRatio < 4.5 ? \`background: #393939; color: rgba(233,233,255,0.9);\` : \`background: rgba(0,0,0,0); color: \${$fgColor};\`;\\n<\/script>\\n\\n<p class:hide={imageUrl !== 'tunnel.jpg'} style={fixUsersBadContrast} class=\\"photo-credit\\">\\n\\tphoto by <a\\n\\t\\thref=\\"https://www.flickr.com/photos/megane_wakui\\"\\n\\t\\tstyle={fixUsersBadContrast}\\n\\t\\ttarget=\\"_blank\\">Masashi Wakui</a\\n\\t>\\n</p>\\n<div\\n\\tclass=\\"wrapper\\"\\n\\tid=\\"wrapper\\"\\n\\tstyle=\\"--bg-color: {$bgColor}; --fg-color: {$fgColor}; background-color: rgb({cssizer($bgColor)})\\"\\n>\\n\\t<img class=\\"underlay\\" id=\\"underlay\\" src={imageUrl} alt=\\"\\" />\\n\\t<div class=\\"overlay\\" style=\\"background-color: rgba({cssizer($overlayColor)}, {$opacity});\\"></div>\\n\\t<div class=\\"infobox\\">\\n\\t\\t<div class=\\"lilwrapper\\" id=\\"file-upload\\">\\n\\t\\t\\t<FileUploader\\n\\t\\t\\t\\thideTitle\\n\\t\\t\\t\\tbuttonLabel=\\"Add image\\"\\n\\t\\t\\t\\tstatus=\\"complete\\"\\n\\t\\t\\t\\taccept=\\"image/*\\"\\n\\t\\t\\t\\ton:change={handleFileUpload}\\n\\t\\t\\t/>\\n\\t\\t\\t{#if useImageColors}\\n\\t\\t\\t\\t{#each schema as color, i}\\n\\t\\t\\t\\t\\t<Dropdown\\n\\t\\t\\t\\t\\t\\tstyle=\\"--active-color: {palette[color.id]} !important;\\"\\n\\t\\t\\t\\t\\t\\ttitleText={\`\${color.loc} Color\`}\\n\\t\\t\\t\\t\\t\\titems={palette.map((x, idx) => ({ id: idx, text: x }))}\\n\\t\\t\\t\\t\\t\\tlet:item\\n\\t\\t\\t\\t\\t\\tbind:selectedId={color.id}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<p style=\\"height: 100%; background-color: {item.text};\\"></p>\\n\\t\\t\\t\\t\\t</Dropdown>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<div class=\\"input-wrapper\\">\\n\\t\\t\\t\\t\\t<label for=\\"bgPicker\\">Background Color: </label>\\n\\t\\t\\t\\t\\t<input type=\\"color\\" class=\\"color-picker\\" id=\\"bgPicker\\" bind:value={bgColorPicker} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"input-wrapper\\">\\n\\t\\t\\t\\t\\t<label for=\\"olPicker\\">Overlay Color: </label>\\n\\t\\t\\t\\t\\t<input type=\\"color\\" class=\\"color-picker\\" id=\\"olPicker\\" bind:value={overlayColorPicker} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"input-wrapper\\">\\n\\t\\t\\t\\t\\t<label for=\\"fgPicker\\">Foreground Color: </label>\\n\\t\\t\\t\\t\\t<input type=\\"color\\" class=\\"color-picker\\" id=\\"fgPicker\\" bind:value={fgColorPicker} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"more-info\\">\\n\\t\\t\\t\\t<button class=\\"teaser\\" class:open on:click={() => (open = !open)}\\n\\t\\t\\t\\t\\t>What is this i don't even</button\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"more-info-content\\">\\n\\t\\t\\t\\t\\t<h1 style=\\"color: #ccc !important; text-align: left;\\">\\n\\t\\t\\t\\t\\t\\tIt's a WGAC Contrast Checker for working with translucent overlays.\\n\\t\\t\\t\\t\\t</h1>\\n\\t\\t\\t\\t\\t<h4>bg + (overlay color * opacity) : fg</h4>\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\tThis tool calculates the contrast ratio of text on background when using a\\n\\t\\t\\t\\t\\t\\tsemi-transparent overlay. Provide a background color, an overlay color, and a\\n\\t\\t\\t\\t\\t\\tforeground/text color, and the tool will calculate the contrast ratio, seen in the\\n\\t\\t\\t\\t\\t\\tbottom right.\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\tThe <a\\n\\t\\t\\t\\t\\t\\t\\thref=\\"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html\\"\\n\\t\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\">WCAG guidelines</a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tuse the following thresholds:\\n\\t\\t\\t\\t\\t\\t<span class=\\"lightgreen\\">greater than 4.5:1 is \\"AA\\" status;</span>\\n\\t\\t\\t\\t\\t\\t<span class=\\"yellow\\">3.0-4.5 is \\"A\\";</span>\\n\\t\\t\\t\\t\\t\\t<span class=\\"pink\\"> less than 3 is <em>fail.</em></span>\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\tIf you choose an image of your own, the tool will generate a 5-color palette from the\\n\\t\\t\\t\\t\\t\\tdominant colors of the image, using <a\\n\\t\\t\\t\\t\\t\\t\\thref=\\"https://lokeshdhakar.com/projects/color-thief/\\"\\n\\t\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\">Color Thief</a\\n\\t\\t\\t\\t\\t\\t>. (This tool doesn't provide css for the full palette, the Color Thief website provides\\n\\t\\t\\t\\t\\t\\tthat functionality, and it's a bit out of scope for this already-bloated tool.)\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\tWhy? Because it's a deceptively difficult task. There are plenty of tools online that\\n\\t\\t\\t\\t\\t\\twill check contrast ratio, but they don't often make it easy to use opacity-based blend\\n\\t\\t\\t\\t\\t\\tand then to tweak the colors to get a decent ratio. The idea of this tool is that it\\n\\t\\t\\t\\t\\t\\tallows you to tweak the knobs a bit better. Additionally, the image palette generation\\n\\t\\t\\t\\t\\t\\tpart isn't super common.\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t<em>\\n\\t\\t\\t\\t\\t\\t\\tPlease note that this tool does not upload anything to a server. There's no storage, and\\n\\t\\t\\t\\t\\t\\t\\tno memory, so make a note of any results you want to keep!\\n\\t\\t\\t\\t\\t\\t</em>\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t<blockquote>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tOnce upon a time, I made a background with an overlay. The contrast was great! But\\n\\t\\t\\t\\t\\t\\t\\tthen my \\"stakeholder\\" felt the background was too dark. <em>Too</em> dark. Is that even\\n\\t\\t\\t\\t\\t\\t\\tpossible?\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tShe gave me a target color, and asked me to blend the background color with the\\n\\t\\t\\t\\t\\t\\t\\toverlay to reach that target.\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tI don't know if you know anything about color theory, but the math involved in that\\n\\t\\t\\t\\t\\t\\t\\trequest is...from another planet. So I made a thing. This way, I never have to do that\\n\\t\\t\\t\\t\\t\\t\\tmath, and, hopefully, with this little tool, you can avoid it, too.\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</blockquote>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"lilwrapper\\" id=\\"color-display\\">\\n\\t\\t\\t<div class=\\"intro\\">\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\ttext: {$fgColor}\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<p>on background: {$bgColor}</p>\\n\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\twith overlay: {$overlayColor} at {($opacity * 100).toFixed(0)}%\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<p>looks kinda like:</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"rgb\\" style=\\"background-color: rgb({cssizer(resultRGB)}); text-align: center;\\">\\n\\t\\t\\t\\t<p style=\\" color: {$fgColor}\\">\\n\\t\\t\\t\\t\\trgb: {cssizer(resultRGB)}\\n\\t\\t\\t\\t\\t<CopyButton\\n\\t\\t\\t\\t\\t\\ttext={\`background-color: rgb(\${cssizer(resultRGB)}); background: linear-gradient(\${$overlayColor + Math.round($opacity * 255).toString(16)}, \${$overlayColor + Math.round($opacity * 255).toString(16)}), url('\${imageFilename}'); color: \${$fgColor};\`}\\n\\t\\t\\t\\t\\t\\tfeedback=\\"Copied!{(imageUrl !== 'tunnel.jpg' &&\\n\\t\\t\\t\\t\\t\\t\\t\\" Please note that if you've uploaded an image, this will copy that image as a base64 data image, which can be a lot of text.\\") ||\\n\\t\\t\\t\\t\\t\\t\\t''}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"contrast\\">\\n\\t\\t\\t\\t<p class={$contrastRatio < 3 ? 'pink' : $contrastRatio > 4.5 ? 'lightgreen' : 'yellow'}>\\n\\t\\t\\t\\t\\tcontrast ratio: {$contrastRatio}\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n\\t<Slider />\\n</div>\\n\\n<style>\\n\\tblockquote {\\n\\t\\tpadding: 11px 11px 11px 33px;\\n\\t\\tborder-left: 2px solid #cccc;\\n\\t\\tbackground: rgba(0, 0, 0, 0.11);\\n\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: 11px;\\n\\t}\\n\\t:global(.bx--copy-btn__feedback) {\\n\\t\\toverflow-wrap: break-word !important;\\n\\t\\tmax-width: 200px;\\n\\t}\\n\\t.dropdown-wrapper {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 11px;\\n\\t\\t&:first-child {\\n\\t\\t\\tflex: 1;\\n\\t\\t}\\n\\t\\t&:last-child {\\n\\t\\t\\tflex-basis: 64px;\\n\\t\\t}\\n\\t}\\n\\t.lightgreen {\\n\\t\\tcolor: lightgreen !important;\\n\\t}\\n\\t.yellow {\\n\\t\\tcolor: yellow !important;\\n\\t}\\n\\t.pink {\\n\\t\\tcolor: pink !important;\\n\\t}\\n\\ta {\\n\\t}\\n\\t.rgb p {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: start;\\n\\t\\talign-items: center;\\n\\t\\tgap: 11px;\\n\\t\\tpadding: 4px;\\n\\t\\tmargin-block: 4px;\\n\\t\\t&:last-child {\\n\\t\\t\\tjustify-content: end;\\n\\t\\t}\\n\\t}\\n\\t.photo-credit {\\n\\t\\tz-index: 4;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tright: 0;\\n\\t\\tpadding: 3px;\\n\\t\\tmargin: 3px;\\n\\t}\\n\\t.photo-credit.hide {\\n\\t\\tdisplay: none;\\n\\t}\\n\\t.teaser {\\n\\t\\tdisplay: block;\\n\\t\\tbackground: rgba(0, 0, 0, 0.33);\\n\\t\\tborder: 1px solid #ccc0;\\n\\t\\tcolor: #ccc;\\n\\t\\theight: 33px;\\n\\t\\tline-height: 33px;\\n\\t\\tpadding-inline: 11px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.teaser:hover,\\n\\t.teaser.open {\\n\\t\\tbackground: rgba(0, 0, 0, 0.76);\\n\\t\\tborder: 1px solid #ccc;\\n\\t\\theight: 33px;\\n\\t\\tline-height: 33px;\\n\\t\\tpadding-inline: 11px;\\n\\t}\\n\\t.more-info-content {\\n\\t\\tdisplay: none;\\n\\t}\\n\\t.open ~ .more-info-content {\\n\\t\\tpadding: 11px;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: 11px;\\n\\t\\theight: 100%;\\n\\t}\\n\\t:global(.bx--list-box__menu-item__option) {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\t& p {\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tpadding: 0;\\n\\t\\t\\theight: 100%;\\n\\t\\t}\\n\\t}\\n\\t:global(.bx--copy-btn.bx--copy) {\\n\\t\\tbackground: rgba(0, 0, 0, 0.33);\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.77);\\n\\t\\t&:hover {\\n\\t\\t\\tbackground: rgba(0, 0, 0, 0.77);\\n\\t\\t\\tborder: 1px solid rgba(0, 0, 0, 1);\\n\\t\\t}\\n\\t}\\n\\t:global(.bx--dropdown) {\\n\\t\\tbackground-color: var(--active-color) !important;\\n\\t}\\n\\t.color-picker {\\n\\t\\tborder: 0;\\n\\t\\tpadding: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 33px;\\n\\t}\\n\\t.input-wrapper {\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 11px;\\n\\t\\theight: 64px;\\n\\t}\\n\\n\\t:global(body) {\\n\\t\\theight: 100%;\\n\\t\\tmin-height: 100vh;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\ttransition: 250ms;\\n\\t\\t/* padding: 33px; */\\n\\t\\t& * {\\n\\t\\t\\tbox-sizing: border-box;\\n\\t\\t\\ttransition: 250ms;\\n\\t\\t}\\n\\t}\\n\\t.wrapper {\\n\\t\\toverflow: hidden;\\n\\t\\tposition: relative;\\n\\t\\tbackground-size: cover;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\t.infobox {\\n\\t\\tposition: relative;\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tposition: relative;\\n\\t}\\n\\t@media screen and (max-width: 876px) {\\n\\t\\t.wrapper {\\n\\t\\t\\t/* overflow: auto; */\\n\\n\\t\\t\\theight: 100%;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t\\t.infobox {\\n\\t\\t\\talign-items: stretch;\\n\\t\\t\\tjustify-content: start;\\n\\t\\t\\tflex-direction: column;\\n\\t\\t}\\n\\n\\t\\t#file-upload,\\n\\t\\t#color-display {\\n\\t\\t\\talign-self: stretch;\\n\\t\\t}\\n\\t}\\n\\t@media screen and (min-width: 876px) {\\n\\t\\t.wrapper {\\n\\t\\t\\t/* overflow: auto; */\\n\\t\\t\\tmin-height: 100dvh;\\n\\t\\t\\twidth: 100dvw;\\n\\t\\t}\\n\\t\\t.infobox {\\n\\t\\t\\tjustify-content: space-between;\\n\\t\\t\\tflex-direction: row;\\n\\t\\t}\\n\\t\\t#color-display {\\n\\t\\t\\talign-self: end;\\n\\t\\t}\\n\\t\\t#file-upload {\\n\\t\\t\\talign-self: start;\\n\\t\\t}\\n\\t}\\n\\t.wrapper,\\n\\t.overlay,\\n\\t.underlay {\\n\\t\\toverflow: hidden;\\n\\t}\\n\\t.overlay,\\n\\t.underlay {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tbottom: 0;\\n\\t}\\n\\t.underlay {\\n\\t\\tclip-path: polygon(0 0, 100% 0, 100% 33%, 33% 100%, 0 100%);\\n\\t\\tobject-fit: cover;\\n\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tz-index: 1;\\n\\t}\\n\\t.overlay {\\n\\t\\tz-index: 2;\\n\\t}\\n\\th1 {\\n\\t\\tposition: relative;\\n\\t\\tz-index: 3;\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: center;\\n\\t\\tcolor: var(--fg-color, #ccc) !important;\\n\\t}\\n\\t.lilwrapper {\\n\\t\\tposition: relative;\\n\\t\\tz-index: 3;\\n\\t\\tbackground-color: #333;\\n\\t}\\n\\t#slider {\\n\\t\\twidth: auto;\\n\\t\\tpadding: 3px 11px;\\n\\t}\\n\\t#file-upload,\\n\\t#color-display {\\n\\t\\tpadding: 33px;\\n\\t\\tmargin: 33px;\\n\\t}\\n\\t#color-display {\\n\\t\\tmax-width: 600px;\\n\\t}\\n\\t#file-upload {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: 11px;\\n\\t\\tmax-width: 600px;\\n\\t\\t/* width: min(100%, 600px); */\\n\\t}\\n\\t#color-display p {\\n\\t\\tfont-family: 'Monaspace Xenon';\\n\\t\\tcolor: #ccc;\\n\\t\\t&:last-child {\\n\\t\\t\\tmargin-top: 11px;\\n\\t\\t\\ttext-align: right;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let useImageColors;
  let schema;
  let resultRGB;
  let fixUsersBadContrast;
  let $fgColor, $$unsubscribe_fgColor;
  let $contrastRatio, $$unsubscribe_contrastRatio;
  let $computedColor, $$unsubscribe_computedColor;
  let $bgColor, $$unsubscribe_bgColor;
  let $overlayColor, $$unsubscribe_overlayColor;
  let $opacity, $$unsubscribe_opacity;
  $$unsubscribe_fgColor = subscribe(fgColor, (value) => $fgColor = value);
  $$unsubscribe_contrastRatio = subscribe(contrastRatio, (value) => $contrastRatio = value);
  $$unsubscribe_computedColor = subscribe(computedColor, (value) => $computedColor = value);
  $$unsubscribe_bgColor = subscribe(bgColor, (value) => $bgColor = value);
  $$unsubscribe_overlayColor = subscribe(overlayColor, (value) => $overlayColor = value);
  $$unsubscribe_opacity = subscribe(opacity, (value) => $opacity = value);
  let palette = [], imageUrl = "tunnel.jpg", bgColorPicker = "#3c6d88", overlayColorPicker = "#b9cfdd", fgColorPicker = "#182a2f", imageFilename = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    useImageColors = imageUrl !== "tunnel.jpg";
    schema = [
      { loc: "Background", id: 0 },
      { loc: "Overlay", id: 2 },
      { loc: "Foreground", id: 4 }
    ];
    set_store_value(
      bgColor,
      $bgColor = useImageColors && palette[schema[0].id] ? palette[schema[0].id] : bgColorPicker,
      $bgColor
    );
    set_store_value(
      overlayColor,
      $overlayColor = useImageColors && palette[schema[1].id] ? palette[schema[1].id] : overlayColorPicker,
      $overlayColor
    );
    set_store_value(
      fgColor,
      $fgColor = useImageColors && palette[schema[2].id] ? palette[schema[2].id] : fgColorPicker,
      $fgColor
    );
    resultRGB = hexToRGB($computedColor);
    fixUsersBadContrast = $contrastRatio < 4.5 ? `background: #393939; color: rgba(233,233,255,0.9);` : `background: rgba(0,0,0,0); color: ${$fgColor};`;
    $$rendered = `<p${add_attribute("style", fixUsersBadContrast, 0)} class="${["photo-credit svelte-uxfm2w", ""].join(" ").trim()}">photo by <a href="https://www.flickr.com/photos/megane_wakui"${add_attribute("style", fixUsersBadContrast, 0)} target="_blank" class="svelte-uxfm2w">Masashi Wakui</a></p> <div class="wrapper svelte-uxfm2w" id="wrapper" style="${"--bg-color: " + escape($bgColor, true) + "; --fg-color: " + escape($fgColor, true) + "; background-color: rgb(" + escape(cssizer($bgColor), true) + ")"}"><img class="underlay svelte-uxfm2w" id="underlay"${add_attribute("src", imageUrl, 0)} alt=""> <div class="overlay svelte-uxfm2w" style="${"background-color: rgba(" + escape(cssizer($overlayColor), true) + ", " + escape($opacity, true) + ");"}"></div> <div class="infobox svelte-uxfm2w"><div class="lilwrapper svelte-uxfm2w" id="file-upload">${validate_component(FileUploader$1, "FileUploader").$$render(
      $$result,
      {
        hideTitle: true,
        buttonLabel: "Add image",
        status: "complete",
        accept: "image/*"
      },
      {},
      {}
    )} ${useImageColors ? `${each(schema, (color, i) => {
      return `${validate_component(Dropdown$1, "Dropdown").$$render(
        $$result,
        {
          style: "--active-color: " + palette[color.id] + " !important;",
          titleText: `${color.loc} Color`,
          items: palette.map((x, idx) => ({ id: idx, text: x })),
          selectedId: color.id
        },
        {
          selectedId: ($$value) => {
            color.id = $$value;
            $$settled = false;
          }
        },
        {
          default: ({ item }) => {
            return `<p style="${"height: 100%; background-color: " + escape(item.text, true) + ";"}"></p> `;
          }
        }
      )}`;
    })}` : `<div class="input-wrapper svelte-uxfm2w"><label for="bgPicker" data-svelte-h="svelte-dun06q">Background Color:</label> <input type="color" class="color-picker svelte-uxfm2w" id="bgPicker"${add_attribute("value", bgColorPicker, 0)}></div> <div class="input-wrapper svelte-uxfm2w"><label for="olPicker" data-svelte-h="svelte-11ddrso">Overlay Color:</label> <input type="color" class="color-picker svelte-uxfm2w" id="olPicker"${add_attribute("value", overlayColorPicker, 0)}></div> <div class="input-wrapper svelte-uxfm2w"><label for="fgPicker" data-svelte-h="svelte-1gjhrcb">Foreground Color:</label> <input type="color" class="color-picker svelte-uxfm2w" id="fgPicker"${add_attribute("value", fgColorPicker, 0)}></div>`} <div class="more-info"><button class="${["teaser svelte-uxfm2w", ""].join(" ").trim()}" data-svelte-h="svelte-1nvafnw">What is this i don&#39;t even</button> <div class="more-info-content svelte-uxfm2w" data-svelte-h="svelte-13bs3l6"><h1 style="color: #ccc !important; text-align: left;" class="svelte-uxfm2w">It&#39;s a WGAC Contrast Checker for working with translucent overlays.</h1> <h4>bg + (overlay color * opacity) : fg</h4> <p>This tool calculates the contrast ratio of text on background when using a
						semi-transparent overlay. Provide a background color, an overlay color, and a
						foreground/text color, and the tool will calculate the contrast ratio, seen in the
						bottom right.</p> <p>The <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" class="svelte-uxfm2w">WCAG guidelines</a>
						use the following thresholds:
						<span class="lightgreen svelte-uxfm2w">greater than 4.5:1 is &quot;AA&quot; status;</span> <span class="yellow svelte-uxfm2w">3.0-4.5 is &quot;A&quot;;</span> <span class="pink svelte-uxfm2w">less than 3 is <em>fail.</em></span></p> <p>If you choose an image of your own, the tool will generate a 5-color palette from the
						dominant colors of the image, using <a href="https://lokeshdhakar.com/projects/color-thief/" target="_blank" class="svelte-uxfm2w">Color Thief</a>. (This tool doesn&#39;t provide css for the full palette, the Color Thief website provides
						that functionality, and it&#39;s a bit out of scope for this already-bloated tool.)</p> <p>Why? Because it&#39;s a deceptively difficult task. There are plenty of tools online that
						will check contrast ratio, but they don&#39;t often make it easy to use opacity-based blend
						and then to tweak the colors to get a decent ratio. The idea of this tool is that it
						allows you to tweak the knobs a bit better. Additionally, the image palette generation
						part isn&#39;t super common.</p> <p><em>Please note that this tool does not upload anything to a server. There&#39;s no storage, and
							no memory, so make a note of any results you want to keep!</em></p> <blockquote class="svelte-uxfm2w"><p>Once upon a time, I made a background with an overlay. The contrast was great! But
							then my &quot;stakeholder&quot; felt the background was too dark. <em>Too</em> dark. Is that even
							possible?</p> <p>She gave me a target color, and asked me to blend the background color with the
							overlay to reach that target.</p> <p>I don&#39;t know if you know anything about color theory, but the math involved in that
							request is...from another planet. So I made a thing. This way, I never have to do that
							math, and, hopefully, with this little tool, you can avoid it, too.</p></blockquote></div></div></div> <div class="lilwrapper svelte-uxfm2w" id="color-display"><div class="intro"><p class="svelte-uxfm2w">text: ${escape($fgColor)}</p> <p class="svelte-uxfm2w">on background: ${escape($bgColor)}</p> <p class="svelte-uxfm2w">with overlay: ${escape($overlayColor)} at ${escape(($opacity * 100).toFixed(0))}%</p> <p class="svelte-uxfm2w" data-svelte-h="svelte-3px9hm">looks kinda like:</p></div> <div class="rgb svelte-uxfm2w" style="${"background-color: rgb(" + escape(cssizer(resultRGB), true) + "); text-align: center;"}"><p style="${"color: " + escape($fgColor, true)}" class="svelte-uxfm2w">rgb: ${escape(cssizer(resultRGB))} ${validate_component(CopyButton$1, "CopyButton").$$render(
      $$result,
      {
        text: `background-color: rgb(${cssizer(resultRGB)}); background: linear-gradient(${$overlayColor + Math.round($opacity * 255).toString(16)}, ${$overlayColor + Math.round($opacity * 255).toString(16)}), url('${imageFilename}'); color: ${$fgColor};`,
        feedback: "Copied!"
      },
      {},
      {}
    )}</p></div> <div class="contrast"><p class="${escape(
      null_to_empty($contrastRatio < 3 ? "pink" : $contrastRatio > 4.5 ? "lightgreen" : "yellow"),
      true
    ) + " svelte-uxfm2w"}">contrast ratio: ${escape($contrastRatio)}</p></div></div></div> ${validate_component(Slider_1, "Slider").$$render($$result, {}, {}, {})} </div>`;
  } while (!$$settled);
  $$unsubscribe_fgColor();
  $$unsubscribe_contrastRatio();
  $$unsubscribe_computedColor();
  $$unsubscribe_bgColor();
  $$unsubscribe_overlayColor();
  $$unsubscribe_opacity();
  return $$rendered;
});
export {
  Page as default
};
