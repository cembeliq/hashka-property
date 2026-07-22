import type { CollectionConfig } from "payload";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const Properties: CollectionConfig = {
  slug: "properties",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "status", "city", "price", "featured"],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.slug && data.name) {
          data.slug = slugify(data.name);
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "URL properti, contoh: the-ashford-residence-bsd",
      },
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Rumah", value: "rumah" },
        { label: "Apartemen", value: "apartemen" },
        { label: "Ruko", value: "ruko" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "tersedia",
      options: [
        { label: "Tersedia", value: "tersedia" },
        { label: "Promo", value: "promo" },
        { label: "Terjual", value: "terjual" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Tampilkan di Properti Unggulan pada halaman utama",
      },
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
      min: 0,
      admin: { description: "Harga dalam Rupiah, contoh: 4250000000" },
    },
    {
      type: "row",
      fields: [
        { name: "bedrooms", type: "number", required: true, min: 0, defaultValue: 0 },
        { name: "bathrooms", type: "number", required: true, min: 0, defaultValue: 0 },
        { name: "landArea", type: "number", required: true, min: 0, defaultValue: 0, label: "Luas Tanah (m²)" },
        { name: "buildingArea", type: "number", required: true, min: 0, defaultValue: 0, label: "Luas Bangunan (m²)" },
      ],
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: true,
      minRows: 1,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "facilities",
      type: "text",
      hasMany: true,
    },
  ],
};
