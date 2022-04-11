

class Element 
{
    constructor(pos, value) {
        this.pos = pos;
        this.value = value;
    }

    getPost()
    {
        return this.pos;
    }
    getValue()
    {
        return this.value;
    }
}

function buildTopList() 
{
    return new Array(
        new Element(1, 5),
        new Element(2, 3),
        new Element(3, 7),
        new Element(4, 1));
}

function buildBottomList() 
{
    return new Array(
        new Element(1, 1),
        new Element(2, 4),
        new Element(3, 3),
        new Element(4, 9));
}

function sortAscendingElemenstListByValue(elementList)
{
    return elementList.sort(function (a, b){
        return (a.value - b.value)
    })
}

function sortAscendingElemenstListByPos(elementList)
{
    return elementList.sort(function (a, b){
        return (a.pos - b.pos)
    })
}

function mainFuntion()
{
    const topList = sortAscendingElemenstListByValue(buildTopList());

    const bottomList = sortAscendingElemenstListByValue(buildBottomList());

    var answerList = new Array();

    var acum = 0;

    for(i = 0; i < topList.length; i++)
    {

        answerList.push(new Element(topList[i].getPost(), bottomList[i].getPost()))

        acum += (topList[i].getValue() * bottomList[i].getValue());
    }

    answerList = sortAscendingElemenstListByPos(answerList);

    console.log("Rsponse: ");
    console.log(answerList);
    console.log("Result: ");
    console.log(acum);
}

mainFuntion();
