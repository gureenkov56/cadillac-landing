interface IFeatures {
    activeBlock: number
}

interface IList {
    img: string
    el: HTMLElement
}

interface IParamsConstructor {
    listElementsAndImgUrl: IList[]
}



export default class Features implements IFeatures {

    public activeBlock: number

    private listElAndImg: IList[]

    private imgList: string[]

    private DOMList: HTMLElement[]

    private imgDOM: HTMLElement

    // private autoplay: boolean

    constructor(elementDOM: HTMLElement, { listElementsAndImgUrl }: IParamsConstructor) {
        this.activeBlock = 0;
        this.imgList = listElementsAndImgUrl.map(el => el.img);
        this.DOMList = listElementsAndImgUrl.map(el => el.el);
        this.listElAndImg = listElementsAndImgUrl;
        this.imgDOM = elementDOM;
    }

    public create(): void {
        this.DOMList.forEach(el => {

            el.addEventListener('mouseover', event => {
                const img = this.listElAndImg.find(el => el.el === event.target).img;
                this.imgDOM.style.backgroundImage = `url('${img}')`;
            }
            )
        });
    }


}