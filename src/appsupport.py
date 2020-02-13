# -*- coding: utf-8 -*-
"""
Created on Thu Jan 16 23:53:45 2020
@author: Kathy Norman and Nancy Schorr
"""
import matplotlib.pyplot as plt
import matplotlib
import numpy as np
from math import ceil, floor
import matplotlib.lines as lines
import matplotlib.text as text
from matplotlib.ticker import StrMethodFormatter


class AppSupport:
    def __init__(self):
        self.TOKEN_SYMBOL = "VKG"  # 3 characters, all caps.  e.g SET = Space Exploration
        self.initial_supply_y = 0
        self.stop_inflation_y = 0
        self.disinflation_ratio = 0
        self.annual_inflation = 0
        self.intervals_till_start_infl = 0
        self.token_count_list_y = []
        self.interval_count_list_x = []
        self.interval_limit_x = None
        self.ones_list = []
        self.real_initial_supply_y = None
        self.interval_inf = None
        self.initial_supply_list = []
        self.token_interval_list = []

    def main(self, args_dict):
        self.initial_supply_y = int(args_dict.get("initial_supply_y"))  # 100,000,000  NULS
        self.stop_inflation_y = int(args_dict.get("stop_inflation_y"))   # 210,000,000  NULS
        self.disinflation_ratio = float(args_dict.get("disinflation_ratio"))
        self.annual_inflation = int(args_dict.get("annual_inflation")) # 5,000,000 NULS
        start_inflation = int(args_dict.get("start_inflation"))
        self.real_initial_supply_y = int(args_dict.get("initial_supply_y"))
        plotfilepath = args_dict.get("plotfilepath")
        interval_count = 0

        tokens = self.initial_supply_y
        self.interval_limit_x = 75 * 12
        monthly_inflation = self.annual_inflation / 12  # 5,000,000 NULS
        deflation = False
        interval_counter = 0

        while True:
            if interval_counter < start_inflation:
                self.token_count_list_y.append(round(tokens))
                self.initial_supply_list.append(self.initial_supply_y)
                self.token_interval_list.append(interval_count)
                interval_count += 1
            else:
                deflation = True
                monthly_inflation = monthly_inflation * (1 - self.disinflation_ratio)
                tokens = (tokens + monthly_inflation

                if tokens >= self.stop_inflation_y:
                    monthly_inflation = 0

                tokens = tokens + monthly_inflation
                self.token_count_list_y.append(round(tokens))  # removed "round"
                self.initial_supply_list.append(self.initial_supply_y)
                self.token_interval_list.append(interval_count)
                interval_count += 1

                print(tokens, monthly_inflation, deflation, interval_count)
                if interval_count > 75 * 12:
                    break




        self.plot_graph(plotfilepath)
        return True

        # #    tokens = (tokens + inflation_amount) * (1 - deflation_ratio)
        # if tokens >= stop_inflation: monthly_inflation = 0
        #
        # if deflation:
        #     monthly_inflation = monthly_inflation * (1 - deflation_ratio)
        # elif (interval_count + 1) >= start_inflation:
        #     deflation = True
        #
        # tokens = tokens + monthly_inflation
        # token_count.append(round(tokens))
        # token_initial_supply.append(initial_supply)
        # token_interval.append(interval_count)
        # interval_count += 1
        #
        # print(tokens, monthly_inflation, deflation, interval_count)
        # if interval_count >= 75 * 12: break

    def roundup(self, num):
        multiplier = 10 ** len(str(int(num)))-1
        return ceil(num/multiplier)*multiplier

    def rounddown(self, num):
        multiplier = 10 ** len(str(int(num)))-1
        return floor(num/multiplier)*multiplier

    def plot_graph(self, plotfilepath):
        plt.ioff()
        font = {'size': 12}
        disinflation_ratio = self.disinflation_ratio
        bottom_x = 0
        top_x = int(self.interval_limit_x )

        bottom_y = self.initial_supply_y

        top_count = self.token_count_list_y[-1]
        top_y = int(top_count)

        if self.stop_inflation_y > top_y:
            top_y = self.stop_inflation_y + (self.stop_inflation_y / 15)  # padding for graph

        disinflation = "{:.1%}".format(disinflation_ratio)
        matplotlib.rc('font', **font)
        fig, ax = plt.subplots(figsize=(12, 9))

        stp_inf = self.stop_inflation_y
        plt.axhline(y=stp_inf, xmin=0, xmax=top_x, linewidth=2, linestyle='-.', color='r')
        text_loc = self.stop_inflation_y + 7
        # ax.annotate('Stop Inflation Boundary', (25, text_loc))
        plt.text(25, text_loc, 'Max Supply', color='r', size='large')
        plt.text(100, bottom_y + 20, '-----  Token Growth Over Time', color='purple', size='x-large', weight='bold')

        # -------- TICKS
        top_x = int(self.roundup(top_x))  # round up

        min_x_gaps = int(top_x / 20)
        major_x_gaps = int(top_x / 10)

        major_y_gaps = int(top_y / 10)
        major_y_gaps = self.rounddown(major_y_gaps)

        major_ticks_x = np.arange(bottom_x, top_x, major_x_gaps)
        minor_ticks_x = np.arange(bottom_x, top_x, min_x_gaps)

       # major_ticks_y = np.arange(bottom_y, top_y,  major_y_gaps)
        major_ticks_y = np.arange(bottom_y, top_y)

        ax.set_xlim(xmin=0, xmax=top_x)
        ax.set_ylim(ymin=bottom_y, ymax=top_y)
        ax.set_yticks(major_ticks_y)

        ax.set_xticks(major_ticks_x)
        ax.set_xticks(minor_ticks_x, minor=True)
        ax.ticklabel_format(style='plain')

        ax.grid(which='both')

        # supply_label = str("{:,}".format(self.real_initial_supply_y))
        plt.title('Life Span for Token', pad=20, color="purple", size=30)

        ans = str("{:,}".format(self.interval_inf))
        part2 = " Inflation, and Disinflation Ratio: "
        xlabel_str = "30 day Intervals, " + ans + part2 + disinflation

        ylabel_str = 'Total Supply'

        plt.ylabel(ylabel_str, size=18, color="green", labelpad=7)
        plt.xlabel(xlabel_str, size=18, labelpad=20, color="blue", weight="bold")

        plt.gca().yaxis.set_major_formatter(StrMethodFormatter('{x:,.0f}'))  # No decimal places

        plt.suptitle("Lifespan for Token " + self.TOKEN_SYMBOL, size=16, y=4, color="red")

        plt.plot(self.token_count_list_y, color='purple', linestyle='-', linewidth=3)
        # str1 = 'Token Growth Over Time'

        # plt.legend(['', str1], loc='lower center')
        plt.savefig(plotfilepath,  dpi=150, format='svg')
        #plt.show()
        return True
