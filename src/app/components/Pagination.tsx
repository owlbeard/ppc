import Link from 'next/link';

export default function Pagination({ page, setPage }: PaginationProps) {
  return (
    <div className="flex">
      <button>◀️</button>
      <label htmlFor="pages"></label>
      <select id="pages" name="pages">
        <option value="1" onSelect={() => setPage(1)}>
          1
        </option>
        <option value="2" onSelect={() => setPage(2)}>
          2
        </option>
        <option value="3" onSelect={() => setPage(3)}>
          3
        </option>
        <option value="4" onSelect={() => setPage(4)}>
          4
        </option>
        <option value="5" onSelect={() => setPage(5)}>
          5
        </option>
        <option value="6" onSelect={() => setPage(6)}>
          6
        </option>
        <option value="7" onSelect={() => setPage(7)}>
          7
        </option>
        <option value="8" onSelect={() => setPage(8)}>
          8
        </option>
        <option value="9" onSelect={() => setPage(9)}>
          9
        </option>
        <option value="10" onSelect={() => setPage(10)}>
          10
        </option>
      </select>
      <p>/</p>
      <button onClick={() => setPage(10)}>10</button>
      <button>▶️</button>
    </div>
  );
}
