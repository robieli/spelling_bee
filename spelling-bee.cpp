#include <iostream>
#include <fstream>
#include <cstring>
#include <vector>

using namespace std;

bool checkword(string &word, vector<char> &letters)
{
  if (word.length() < 4)
  {
    return false;
  }

  bool primaryLetter = false;

  for (size_t i = 0; i < word.length(); ++i)
  { // for letter in word
    bool inWord = false;

    for (size_t j = 0; j < letters.size(); ++j)
    { // for letter in set
      if (word[i] == letters[j])
      {
        if (j == 0)
        {
          primaryLetter = true;
        }

        inWord = true;
      }
    } // end letter in set

    if (!inWord)
    {
      return false;
    }
  } // end letter in word

  return primaryLetter;
}

int main()
{
  ios_base::sync_with_stdio(false);

  vector<char> letters;
  letters.reserve(7);
  ifstream inletters("letters.txt");
  string input;

  while (getline(inletters, input))
  {

    letters.push_back((char)toupper(input[0]));
  }

  string word;
  ifstream dictionary("wordlist.txt");

  while (getline(dictionary, word))
  {
    if (checkword(word, letters))
    {
      cout << word << endl;
    }
  }
}