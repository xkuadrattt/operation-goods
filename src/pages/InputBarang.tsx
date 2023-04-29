import { Form } from "react-router-dom";

const InputBarang = () => {
  return (
    <section className="p-4 ">
      <h2 className="mb-8 text-xl font-bold">Input Barang</h2>
      <Form className="[&>div>label]:text-black/60 [&>div>input]:ring-1 [&>div>input]:px-2 [&>div>input]:py-1 [&>div>input]:rounded-md [&>div>input]:ring-sky-200">
        <div className="namabarang mb-4 flex flex-col">
          <label htmlFor="namabarang">
            Nama Barang
          </label>
          <input type="text" id="namabarang" />
        </div>
        <div className="serialnumber mb-4 flex flex-col">
          <label htmlFor="serialnumber">
            Serial Number
          </label>
          <input type="text" id="serialnumber" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="harga">
            Harga
          </label>
          <input type="text" id="harga" />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="supplier">
            Supplier
          </label>
          <input type="text" id="supplier" />
        </div>
        <button>Input</button>

      </Form>
    </section>
  )
};

export default InputBarang;
