CXX = g++
CXXFLAGS = -std=c++17 -Wconversion -Wall -Werror -Wextra -pedantic -O3

.PHONY: all clean

spelling-bee: 
	$(CXX) $(CXXFLAGS) -o spelling-bee spelling-bee.cpp

all: spelling-bee

clean: 
	rm -f spelling-bee
