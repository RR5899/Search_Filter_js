Const Result = Document.GetElementById('Result')
Const Filter = Document.GetElementById('Filter')
Const ListItems = []
GetData()
Filter.AddEventListener('Input', (E) => FilterData(E.Target.Value))
Async Function GetData() {
Const Res = Await Fetch('Https://Randomuser.Me/Api?Results=50')
Const { Results } = Await Res.Json()
// Clear Result
Result.InnerHTML = ''
Results.ForEach(User => {
Const Li = Document.CreateElement('Li')
ListItems.Push(Li)
Li.InnerHTML = `
<Img Src="${User.Picture.Large}" Alt="${User.Name.First}">
<Div Class="User-Info">
<H4>${User.Name.First} ${User.Name.Last}</H4>
<P>${User.Location.City}, ${User.Location.Country}</P>
</Div>
`
Result.AppendChild(Li)
})
}
Function FilterData(SearchTerm) {
ListItems.ForEach(Item => {
If(Item.InnerText.ToLowerCase().Includes(SearchTerm.ToLowerCase())) {
Item.ClassList.Remove('Hide')
} Else {
Item.ClassList.Add('Hide')
}
})
}
