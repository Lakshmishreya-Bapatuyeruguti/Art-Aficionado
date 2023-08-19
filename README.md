# Art-Aficionado
NFT gallery built using React, Tailwind CSS, Wagmi
### About
NFT Gallery fetches nft and its metadta from collections smart contract using the smart contract of Bored Ape Yacht Club of goerli network. The Home page shows option to connect to metamask wallet and displays nft;s and to get any metadata information user can click on view NFT to get redirected to page where nft details could be seen. Wagmmi has been used for smart contract interaction and connecting to metamask functionality and React as frontend library and tailwind css for UI styling.
### Technical Decisions
- Smart Contract Interaction:<br>
I have utilized the Wagmi library for interacting with the smart contract responsible for managing NFT collections, specifically for the Bored Ape project.
- Frontend Library:<br>
I have used react library for fronyend and ttailwind css for styling
- Efficient Data Fetching
Instead of conventional looping, I leveraged the UseContractInfiniteReads hook from Wagmi. This allows us to fetch multiple NFT details simultaneously, optimizing performance and reducing load times.
### Challenges Faced
- Optimized Data Fetching: One of the challenges I encountered was finding the most efficient way to fetch NFT details. We resolved this by adopting the UseContractInfiniteReads approach.

- Compatibility Issues: I faced compatibility issues related to Wagmi versions. These were resolved through careful version management and ensuring all dependencies were compatible.

### Enhancements for the Future
Seaport SDK Integration: In the future, I plan to enhance the project by integrating the Seaport SDK. This will enable us to fetch NFT details across various blockchain networks, providing a more comprehensive experience.

### Screenshots
![art1](https://github.com/Lakshmi-Shreya/Art-Aficionado/assets/76276531/e8df7a55-6f2d-431d-9343-eda0c0d16e30)
![art2](https://github.com/Lakshmi-Shreya/Art-Aficionado/assets/76276531/baa019d6-eb76-4ad0-bbd4-e81eeb963ce6)
![art3](https://github.com/Lakshmi-Shreya/Art-Aficionado/assets/76276531/1d227281-1f24-4324-9419-2d761eb92464)
![art4](https://github.com/Lakshmi-Shreya/Art-Aficionado/assets/76276531/d36dc377-46a9-4508-8453-8f3561849a93)

### Note - 
- Connect to goerli network to view nft details
### Steps to locally run the project
1. **Clone the Repository:**
   ```
   git clone https://github.com/Lakshmi-Shreya/Art-Aficionado```
2. **Install node dependencies:**
   ```shell
    npm install
3. **Run React App**
  ```shell
   npm start 

