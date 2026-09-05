/*
 * อย่าลืมเปลี่ยน userName และ type ให้เป็นของตัวเอง
 */
export default function Sidebar() {
  return (
    <aside
      className="d-flex flex-column p-4 bg-primary min-vh-100"
      data-bs-theme="dark"
    >
      <p className="text-white">ยศนนท์ : admin</p>
    </aside>
  );
}
