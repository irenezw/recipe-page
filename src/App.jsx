import { useState } from 'react';
import imageOmelette from '../public/assets/images/image-omelette.jpeg';
import './App.css';

function App() {
  return (
    <>
      <div className='recipe-card'>
        {/* header div */}
        <div id='recipe-header-div'>
          {/* image */}
          <img
            className='recipe-photo'
            src={imageOmelette}
            alt='Omelette filled with vegetables on a white plate.'
          />
          <h1>Simple Omelette Recipe</h1>
          {/* intro text */}
          <p id='intro-text'>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          {/* prep time */}
          <div id='prep-time'>
            <div className='text-area'>
              <h3>Preparation time</h3>
              <ul>
                <li>
                  <p>
                    <strong>Total: </strong> Approximately 10 minutes
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Preparation: </strong> 5 minutes
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cooking: </strong> 5 minutes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='main-section' id='ingredients'>
          {/* ingredients */}
          <h2>Ingredients</h2>
          <ul>
            <li>
              <p>2-3 large eggs</p>
            </li>
            <li>
              <p>Salt, to taste</p>
            </li>
            <li>
              <p>Pepper, to taste</p>
            </li>
            <li>
              <p>1 tablespoon of butter or oil</p>
            </li>
            <li>
              <p>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>
        </div>
        <hr class='divider-line'></hr>

        <div className='main-section' id='instructions'>
          {/* <div className='text-area'> */}
          <h2>Instructions</h2>
          <ol>
            <li>
              <p>
                <strong>Beat the eggs: </strong> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </p>
            </li>
            <li>
              <p>
                <strong>Heat the pan: </strong> Place a non-stick frying pan
                over medium heat and add butter or oil.
              </p>
            </li>
            <li>
              <p>
                <strong>Cook the omelette: </strong> Once the butter is melted
                and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>
            <li>
              <p>
                <strong>Add fillings (optional): </strong> When the eggs begin
                to set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </p>
            </li>
            <li>
              <p>
                <strong>Fold and serve: </strong> As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </p>
            </li>
            <li>
              <p>
                <strong>Enjoy: </strong> Serve hot, with additional salt and
                pepper if needed.
              </p>
            </li>
          </ol>
          {/* </div> */}
        </div>
        <hr class='divider-line'></hr>
        <div className='main-section'>
          <h2>Nutrition</h2>
          <p>
            The table before shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tr>
              <th scope='row'>Calories</th>
              <td>
                <strong>227kcal</strong>
              </td>
            </tr>
            <tr>
              <th scope='row'>Carbs</th>
              <td>
                <strong>0g</strong>
              </td>
            </tr>
            <tr>
              <th scope='row'>Protein</th>
              <td>
                <strong>20g</strong>
              </td>
            </tr>
            <tr>
              <th scope='row'>Fat</th>
              <td>
                <strong>22g</strong>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
