



// header start
let newArr = ["Home", "Product", "About","Contact"]
let elsiteHeader = document.querySelector(".site-header")
let elContainer = document.createElement("div")
let elHeader = document.createElement("div")
let elLogoLink = document.createElement("a")
let elLogoImg  = document.createElement("img")
let elHeaderList = document.createElement("ul")
let elHeaderLink = document.createElement("a")

elContainer.classList.add("container")
elHeader.classList.add("header")
elLogoLink.classList.add("header__logo-link")
elLogoImg.classList.add("header__logo-img")
elHeaderList.classList.add("header__list")
elHeaderLink.classList.add("header__link")

elLogoLink.href = "/"
elLogoImg.src = "./images/logo-img.svg"
elLogoImg.width = "206"
elLogoImg.height = "78"
elLogoImg.alt = "Site logo"

elHeaderLink.textContent ="Login"
elHeaderLink.href = "/"

newArr.forEach(item => {
    let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")

    elHeaderItemLink.href= "/"
    elHeaderItem.className = "header__item"
    elHeaderItemLink.className = "header__item-link"

    elHeaderItemLink.textContent = item
    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)


})


elsiteHeader.appendChild(elContainer)
elContainer.appendChild(elHeader)
elHeader.append(elLogoLink,elHeaderList,elHeaderLink )
elLogoLink.appendChild(elLogoImg)

// header end


// hero section start

let heroBtns = ["Try For Free", "Learn More"]

let elSectionHero = document.querySelector(".hero-section")
let elHeroContainer = document.createElement("div")
let elHero = document.createElement("div")
let elHeroTitle = document.createElement("h1")
let elHeroText = document.createElement("p")
let elHeroList = document.createElement("ul")

elHeroContainer.className = "container"
elHero.className = "hero"

elHeroTitle.className = "hero__title"
elHeroTitle.textContent = " Work at the speed of thought"

elHeroText.className = "hero__text"
elHeroText.textContent = "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."

elHeroList.className = "hero__list"
let count = 1
heroBtns.forEach(item => {
    let elHeroItem = document.createElement("li")
    let elHeroItemLink = document.createElement("a")

    
    elHeroItem.className = "hero__item"
    elHeroItemLink.className = "hero__item-link" + count++
    elHeroItemLink.href = "/"
    elHeroItemLink.textContent = item

    elHeroList.appendChild(elHeroItem)
    elHeroItem.appendChild(elHeroItemLink)
})


elSectionHero.appendChild(elHeroContainer)
elHeroContainer.appendChild(elHero)
elHero.append(elHeroTitle, elHeroText, elHeroList)
// hero section end

// features section start 

// let elFeatItemsArr= ["A single source of truth", "Intuitive interface", "Or with rules"]
// let elFeatItemsIMages = ["./images/feat1.svg","./images/feat2.svg","./images/feat3.svg"]

// let elFeatSection = document.querySelector(".features-section")
// let elFeatContainer = document.createElement("div")
// let elFeat = document.createElement("div")
// let elFeatTitleTextWrapper = document.createElement("div")
// let elFeatTitle = document.createElement("h2")
// let elFeatText = document.createElement("p")
// let elFeatContent = document.createElement("div")
// let elFeatImg = document.createElement("img")
// let elFeatList = document.createElement("ul")

// elFeatContainer.className = "container"
// elFeat.className = "features"
// elFeatTitleTextWrapper.className = "features__content-wrapper"
// elFeatTitle.className = "features__title"
// elFeatText.className = "features__text"
// elFeatContent.className = 'features__content'
// elFeatImg.className = "features__img"
// elFeatList.className = "features__list"

// elFeatItemsArr.forEach(item => {
//     let elFeatItem = document.createElement("li")
//     let elFeatItemWRapper = document.createElement("div")
//     let elFeatItemImg = document.createElement("img")
//     let elFeatItemTitle = document.createElement("h3")
//     let elFeatItemText = document.createElement("p")

//     elFeatItemTitle.textContent = item
//     elFeatItemText.textContent = "When you add work to your Slate calendar we automatically calculate useful insights "
//     elFeatItemsIMages.forEach(item => elFeatItemImg.src = item)

//     elFeatItem.className = "features__item"
//     elFeatItemWRapper.className = "features__item-content"
//     elFeatItemImg.className = "features__item-img"
//     elFeatItemTitle.className - "features__item-title"
//     elFeatItemText.className = "features__item-text"

//     elFeatItemImg.src = 

//     elFeatList.appendChild(elFeatItem)
//     elFeatItem.append(elFeatItemWRapper,elFeatText)
//     elFeatItemWRapper.append(elFeatItemImg,elFeatItemTitle)
// })

// elFeatSection.appendChild(elFeatContainer)
// elFeatContainer.appendChild(elFeat)
// elFeat.append(elFeatTitleTextWrapper,elFeatContent)
// elFeatTitleTextWrapper.append(elFeatTitle,elFeatText)
// elFeatContent.append(elFeatImg,elFeatList)
// features section end 

