#include <iostream>
#include <fstream>
#include <cstring>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  ifstream file("NSWL2023.txt");
  ofstream output("wordlist3.txt");
  string word;
  vector<string> words;
  while (file >> word)
  {
    bool add = true;

    if (word[word.length() - 1] == ',') // clean up strings
    {
      word = word.substr(0, word.length() - 1);
    }

    if (word.length() < 4)
    {
      add = false;
    }
    else
    {
      for (size_t i = 0; i < word.length(); ++i)
      { // check for all caps
        if (!isupper(word[i]))
        {
          add = false;
          break;
        }
      }
    }

    if (add)
    {
      words.push_back(word);
    }
  }
  file.close();
  sort(words.begin(), words.end());

  string prevword = words[0]; // remove duplicates
  int count = 1;
  for (size_t i = 1; i < words.size(); ++i)
  {
    if (words[i] != prevword)
    {
      words[count] = words[i];
      ++count;
    }
    prevword = words[i];
  }

  for (size_t i = 0; i < words.size(); ++i)
  {
    output << words[i] << endl;
  }
}