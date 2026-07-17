export function formatRupiah(value: number): string {
  if (value >= 1_000_000_000) {
    const miliar = value / 1_000_000_000;
    return `Rp ${trimZero(miliar)} M`;
  }
  if (value >= 1_000_000) {
    const juta = value / 1_000_000;
    return `Rp ${trimZero(juta)} Jt`;
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function trimZero(value: number): string {
  return value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("id-ID").format(value);
}
