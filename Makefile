CXX = g++
CXXFLAGS = -std=c++17 -Wconversion -Wall -Werror -Wextra -pedantic -O3

.PHONY: all clean

spelling-bee: 
	$(CXX) $(CXXFLAGS) -o spelling-bee spelling-bee.cpp

process-words:
	$(CXX) $(CXXFLAGS) -o process-words process-words.cpp

all: spelling-bee process-words

clean: 
	rm -f spelling-bee
	rm -f process-words
