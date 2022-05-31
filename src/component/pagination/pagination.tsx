import { useRouter } from "next/router";

export default function Pagination({ length, currentPage }: { length: number, currentPage: number }) {
    const arrayLength = Array(length).fill(1);
    let paginationList = arrayLength.map((number, index) => <option id={"page" + (index + 1)} value={index + 1} key={index + 1} className="lg:text-lg">{number + index}</option>);
    const router = useRouter();
    let nextPageURL: string = "/";
    let key = Object.keys(router.query);
    key = key.slice(0, key.length - 1);
    let values = Object.values(router.query);
    values = values.slice(0, values.length - 1);
    const path: string[] = router.query.slug as string[];
    const changePageHandler = (input: number | any) => {
        let inputNumber: number = 0;
        if (typeof input === "object") {
            inputNumber = Number(input.target.value);
        } else {
            inputNumber = input;
        }
        if (inputNumber != currentPage && inputNumber <= length && inputNumber >= 1) {
            path.map(item => nextPageURL = nextPageURL + item + "/");
            if (!(key.length == 0) && !(inputNumber == 1)) {
                nextPageURL = nextPageURL + "?";
                if (key.some(item => item === "page")) {
                    key.map((item, index) => {
                        if (item === "page") {
                            if (inputNumber === 1) {

                            } else {
                                nextPageURL = nextPageURL + item + "=" + inputNumber.toString() + (index == (key.length - 1) ? "" : "&");
                            }
                        } else {
                            nextPageURL = nextPageURL + item + "=" + values[index] + (index == (key.length - 1) ? "" : "&");
                        }
                    });
                } else {
                    nextPageURL = nextPageURL + "page=" + inputNumber + "&"
                    key.map((item, index) => {
                        nextPageURL = nextPageURL + item + "=" + values[index] + (index == (key.length - 1) ? "" : "&");
                    });
                }
            } else if (key.length == 0 && inputNumber > 1) {
                nextPageURL = nextPageURL + "?" + "page=" + inputNumber;
            } else if (key.length > 0 && inputNumber == 1) {
                if (!(key.length == 1 && (key.some(item => item == "page")))) {
                    nextPageURL = nextPageURL + "?";
                }
                const findPageIndex = key.indexOf("page");
                key.splice(findPageIndex, 1);
                values.splice(findPageIndex, 1);
                if (key.length > 0) {
                    key.map((item, index) => {
                        nextPageURL = nextPageURL + item + "=" + values[index] + (index == (key.length - 1) ? "" : "&");
                    });
                }
            }
            router.push(nextPageURL);
        }
    }
    return <div className="w-full md:w-4/5 lg:container h-20 flex flex-row justify-between items-center my-2 px-4 py-1 bg-pagination text-white">
        <button id="PreviousPage" className={currentPage < 5 ? "flex flex-row cursor-not-allowed" : "flex flex-row"} onClick={() => changePageHandler(currentPage - 1)} ><img src="/image/go_previous_page.svg" alt="صفحه قبل" className={currentPage < 5 ? "w-20 lg:w-28 h-16 opacity-50" : "w-20 lg:w-28 h-16"} /></button>
        <span>
            <select name="pagination" id="pagination" onChange={(event) => changePageHandler(event)} value={currentPage} defaultValue={currentPage} className="text-black lg:text-lg rounded w-20 h-10 px-2">
                {paginationList}
            </select>
        </span>
        <button id="NextPage" className={currentPage == length ? "flex flex-row cursor-not-allowed" : "flex flex-row"} onClick={() => changePageHandler(currentPage + 1)} ><img src="/image/go_next_page.svg" alt="صفحه بعد" className={currentPage == length ? "w-20 lg:w-28 h-16 opacity-50" : "w-20 lg:w-28 h-16"} /></button>

    </div>
}